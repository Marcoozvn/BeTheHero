import React, { useContext, useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import { ThemeContext } from '../../contexts/ThemeContext'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Detail() {
  const [style, setStyle] = useState({})
  const navigation = useNavigation()
  const route = useRoute()
  const { theme } = useContext(ThemeContext)
  const { incident } = route.params
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}`

  useEffect(() => {
    if (theme === 'light') {
      const myStyle = styles('#f0f0f5', '#13131a', '#737380', '#41414d', '#fff')
      setStyle(myStyle)
    } else {
      const myStyle = styles('#111', '#fff', '#dcdce6', '#fff', '#222')
      setStyle(myStyle)
    }
  }, [theme])

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['marcos.cesa@ccc.ufcg.edu.br'],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=558396187866&text=${message}`)
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={logoImg}/>
        
        <TouchableOpacity onPress={navigateBack}>
          <Feather name='arrow-left' size={28} color='#E82041' />
        </TouchableOpacity>
      </View>

      <View style={style.incident}>
        <Text style={[style.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={style.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
        
        <Text style={style.incidentProperty}>CASO:</Text>
        <Text style={style.incidentValue}>{incident.title}</Text>

        <Text style={style.incidentProperty}>VALOR:</Text>
        <Text style={style.incidentValue}>
          {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}
        </Text>
      </View>

      <View style={style.contactBox}>
        <Text style={style.heroTitle}>Salve o dia!</Text>
        <Text style={style.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={style.heroDescription}>Entre em contato:</Text>

        <View style={style.actions}>
          <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
            <Text style={style.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.action} onPress={sendMail}>
            <Text style={style.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}