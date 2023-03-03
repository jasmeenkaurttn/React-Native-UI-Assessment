import { View, Text } from 'react-native'
import React from 'react'
import TabRoutes from '../components/TabRoutes'

const TabParent = (props) => {
  return (
    <View style={{flex:1}}>
      <TabRoutes name={props.route.params.name}/>
    </View>
  )
}

export default TabParent