import {Image, Text, View, TextInput} from "react-native";
import {COLORS, FONTS, SIZES, assets} from "../constants";
import React from "react";
import person05 from "../assets/images/person05.png";

const HomeHeader = ({onSearch}) => {
    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font + 20,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
        }}>
            <View style={{

                alignItems: 'center'
            }}>
                <View style={{
                    width: 100,
                    height: 100
                }}>
                    <Image
                        source={assets.person05}
                        resizeMode="contain"

                        style={{
                            borderRadius: 100,
                            width: '100%',
                            height: '100%'
                        }}
                    />

                    <Image
                        source={assets.badge}
                        resizeMode="contain"

                        style={{
                            position: 'absolute',
                            width: 25,
                            height: 25,
                            bottom: 0,
                            right: 0
                        }}
                    />
                </View>
            </View>
            <View style={{
                marginVertical: SIZES.font, marginTop: 30, alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: FONTS.regular, fontsize: SIZES.small,
                    color: COLORS.gray
                }}>
                    @OwenNoWel
                </Text>

                <Text style={{
                    fontFamily: FONTS.bold, fontsize: SIZES.large,
                    color: COLORS.white, marginTop: SIZES.base / 2
                }}>
                    Let's find a masterpiece!
                </Text>

                <View style={{marginTop: SIZES.font}}>
                    <View style={{
                        width: "100%",
                        borderRadius: SIZES.font,
                        backgroundColor: COLORS.gray,
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: SIZES.font,
                        paddingVertical: SIZES.small - 2,
                    }}>
                        <Image
                            source={assets.search}
                            resizeMode="contain"
                            style={{width: 20, height: 20, marginRight: SIZES.base}}
                        />

                        <TextInput
                            placeholder="Search NFT"
                            style={{flex: 1}}
                            onChangeText={onSearch}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeHeader