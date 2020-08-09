import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

const TeacherItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile} >
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/42724637?s=460&u=cdd72e4fcb664d17ecaa8efce4289a6de1e06d7d&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Matheus Santos</Text>
                    <Text style={styles.subject}>Quimica</Text>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem