import {useState} from "react";
import {View, FlatList, Text, SafeAreaView} from "react-native";

import {COLORS, NFTData} from "../constants";
import {NFTCard, HomeHeader, FocusedStatusBar} from "../components";
import position from "react-native-web/dist/exports/Touchable/Position";


const Home = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <FocusedStatusBar background={COLORS.primary}/>

            <View style={{flex: 1}}>
                <View style={{zIndex: 1}}>
                    <FlatList data={NFTData}
                              renderItem={({item}) => <NFTCard data={item}/>}
                              keyExtractor={(item => item.id)}
                              showsVerticalScrollIndicator={false}
                              ListHeaderComponent={<HomeHeader/>}
                    />

                </View>


            </View>
        </SafeAreaView>
    )
}
export default Home;