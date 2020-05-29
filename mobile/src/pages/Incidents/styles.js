import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
/*
headerText: {
    fontSize: 15,
    color: '#737380'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },
  */


const styles = (backgroundColor, titleColor, textColor, incidentTitleColor, cardBackgroundColor) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: backgroundColor
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerRight: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: textColor
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  switch: {
    marginLeft: 10
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: titleColor,
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: textColor
  },

  incidentList: {
    marginTop: 25
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: cardBackgroundColor,
    marginBottom: 16
  },

  incidentProperty: {
    fontSize: 14,
    color: incidentTitleColor,
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: textColor
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default styles