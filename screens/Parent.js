import { View, Text } from 'react-native'
import React from 'react'
import DrawerRoutes from '../components/DrawerRoutes'

const Parent = (props) => {
  return (
    <View style={{flex:1}}>
        <DrawerRoutes name={props.route.params.name}/>
    </View>
  )
}

export default Parent