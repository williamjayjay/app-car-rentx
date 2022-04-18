import React, { useState } from 'react';
import { parseISO, format } from 'date-fns';

import { useTheme } from 'styled-components';
import { StatusBar, Alert, } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

/* ============ NATIVES E LIBS ============ */


import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer

} from './styles';

import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg'
import { Button } from '../../components/Button';
import { Calendar, DayProps, MarkedDatesProps, generateInterval, } from '../Calendar';
import { CarDTO } from '../../dtos/CarDTO';
/* ============ COMPONENTS E OTHERS CREATED ============ */

interface RentalPeriod {
  startFormated: string;
  endFormated: string;
}

interface Params {
  car: CarDTO
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const { car } = route.params as Params


  function handleNavSchedulingDetails() {

    console.log('handleNavSchedulingDetails.log')
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates)
    })

  }

  function handleNavBack() {
    navigation.goBack()
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({

      startFormated: format(parseISO(firstDate), 'dd/MM/yyyy'),
      endFormated: format(parseISO(endDate), 'dd/MM/yyyy')

    })

  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <BackButton color={theme.colors.shape} onPress={handleNavBack} />


        <Title>
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormated} >
              {rentalPeriod.startFormated}
            </DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormated}>
              {rentalPeriod.endFormated}
            </DateValue>
          </DateInfo>
        </RentalPeriod>


      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button
          enabled={!!rentalPeriod.startFormated}
          title="Confirmar"
          onPress={handleNavSchedulingDetails}
        />
      </Footer>

    </Container>
  )
}