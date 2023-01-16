import {TouchableOpacity, Text, View, Image} from "react-native";
import React from "react";
import {COLORS, SIZES, SHADOWS, FONTS} from "../constants";

export const CircleButton = ({imgURL, handelPress, ...props}) => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: "absolute",
            borderRadius: SIZES.extraLarge,
            alignItems: "center",
            justifyContent: "center",
            ...SHADOWS.light,
            ...props,
        }} onPress={handelPress}
        >
            <Image source={imgURL}
                   resizeMode="contain"
                   style={{height: 24, width: 24}}
            />
        </TouchableOpacity>
    )
}


export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.small,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                ...props,
            }}
            onPress={handlePress}
        >
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: fontSize,
                    color: COLORS.white,
                    textAlign: "center",
                }}
            >
                Place a bid
            </Text>
        </TouchableOpacity>
    );
};
