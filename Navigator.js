// Navigator.js

import React from 'react';
import {TextInput
        ,View
        ,StyleSheet
        ,Dimensions
        ,Image } from 'react-native';
import {createAppContainer} from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { withNavigation } from 'react-navigation';
import ListScreen from './screens/ListScreen';
import EditScreen from './screens/EditScreen';
import PrivateScreen from './screens/PrivateScreen';
import EditHeader from './components/EditHeader';
import {Ionicons} from '@expo/vector-icons';

//BottomTabNavigator을 생성합니다.
const TabNavigator = createBottomTabNavigator({
    //ListScreen이라는 이름의 탭을 생성
    ListScreen: {
				//탭의 화면은 ListScreen을 사용합니다.
        screen: ListScreen,
						//해당 탭의 옵션 중
            navigationOptions: {
							// '아이콘 설정'을 합니다.
	            tabBarIcon: ({tintColor}) => {
									//tabBarOptions에서 color을 받아와 아이콘에 적용해서 리턴합니다.
	                return <Ionicons name='ios-apps' size={25} color={tintColor}/>
	            }
            }
    },
    EditScreen: {
        screen: EditScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return <Ionicons name='ios-create' size={25} color={tintColor}/>
                }
            }
    },
    PrivateScreen: {
        screen: PrivateScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return <Ionicons name='ios-person' size={25} color={tintColor}/>
                }
            }
    }
});

// App.js에서 Navigation을 사용하려면 createAppContainer을 이용해 최상위 Navigation을 처리 해줘야 합니다.
export default createAppContainer( TabNavigator);