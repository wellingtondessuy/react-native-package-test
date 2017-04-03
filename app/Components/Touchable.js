import React, {Component} from 'react'
import { View, Text, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'

export default
class Touchable extends Component {

   render() {
       let {children, ...props} = this.props

       if(Platform.OS == 'ios') return <TouchableOpacity {...props} delayPressIn={0}>{children}</TouchableOpacity>
       else	return <TouchableNativeFeedback {...props} delayPressIn={0}>{children}</TouchableNativeFeedback>
        
   }

}