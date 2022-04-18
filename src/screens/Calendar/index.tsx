import React from 'react';
import { Feather } from '@expo/vector-icons'
import { Calendar as CustomCalendar, LocaleConfig, DateCallbackHandler } from 'react-native-calendars'
import { useTheme } from 'styled-components';
import { ptBR } from './localeConfig';
import { generateInterval } from './generateInterval';
/* ============ NATIVES E LIBS ============ */

/* ============ COMPONENTS E OTHERS CREATED ============ */

LocaleConfig.locales['pt-br'] = ptBR

LocaleConfig.defaultLocale = 'pt-br'

interface MarkedDatesProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  }

}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

interface CalenderProps {
  markedDates: MarkedDatesProps;
  onDayPress: DateCallbackHandler
}

function Calendar({ markedDates, onDayPress }: CalenderProps) {
  const theme = useTheme()

  return (
    <CustomCalendar
      renderArrow={(direction) =>
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction == 'left' ? "chevron-left" : "chevron-right"}
        />
      }

      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_details,
        paddingBottom: 10,
        marginBottom: 10
      }}

      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_400,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.secondary_600,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -12
        }
      }}

      firstDay={1}
      minDate={new Date().toString()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}


    />


  )
}

export {
  Calendar,
  MarkedDatesProps,
  DayProps,
  generateInterval

}