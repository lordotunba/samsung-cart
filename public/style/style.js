import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "color": "#000000"
    },
    "headerText": {
        "alignItems": "center",
        "paddingBottom": 20
    },
    "ratings": {
        "flex": 2,
        "display": "inline",
        "flexDirection": "row",
        "float": "right"
    },
    "srike-out": {
        "color": "#e4002b",
        "textDecoration": "line-through"
    },
    "count": {
        "color": "#00b3e3",
        "position": "relative",
        "bottom": 15,
        "display": "inline-block",
        "paddingLeft": 4
    },
    "img-cart": {
        "flexDirection": "column",
        "alignItems": "center",
        "marginTop": 0,
        "marginRight": 55,
        "marginBottom": 0,
        "marginLeft": 55
    },
    "search-widget": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": 30,
        "alignItems": "center",
        "width": "100%"
    },
    "wrapper": {
        "flexDirection": "column",
        "alignItems": "center",
        "display": "flex",
        "marginTop": 30
    },
    "p": {
        "color": "#000"
    },
    "container": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-between",
        "marginTop": 0,
        "marginRight": 130,
        "marginBottom": 0,
        "marginLeft": 130
    },
    "widget-cart": {
        "display": "flex",
        "minHeight": 500
    },
    "section-map": {
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 50,
        "marginLeft": "auto",
        "flexDirection": "column",
        "alignItems": "center"
    },
    "search-plus-icon": {
        "color": "#818a91 !important",
        "paddingTop": 5
    },
    "btn-cart": {
        "backgroundColor": "#00b140",
        "border": "1px solid transparent"
    },
    "btn-cart:hover": {
        "textDecoration": "none",
        "backgroundColor": "#009837",
        "color": "white",
        "cursor": "pointer"
    },
    "btn-cart:visited": {
        "textDecoration": "none"
    },
    "input[name=\"samsung-shopping-rating\"]": {
        "display": "none"
    },
    "amount-text": {
        "paddingTop": 10,
        "color": "#818a91"
    },
    "highlight-text": {
        "color": "#818a91"
    },
    "highlight-text span span": {
        "color": "#000"
    },
    "title-text": {
        "color": "#000",
        "paddingBottom": 15
    },
    "newText": {
        "color": "rgb(255, 180, 0)"
    },
    "longTxt": {
        "color": "#000 !important"
    },
    "size-text": {
        "color": "#818a91",
        "paddingBottom": 18
    },
    "size-text ul": {
        "listStyle": "none",
        "display": "inline-block",
        "height": 0,
        "marginLeft": -29,
        "marginTop": -5
    },
    "size-text ul > li": {
        "fontSize": 0.875,
        "display": "inline"
    },
    "size-text ul > liselected a": {
        "border": "2px solid #20a2ff !important"
    },
    "size-text ul > li selected a": {
        "border": "2px solid #20a2ff !important"
    },
    "ul>li:hover a": {
        "border": "2px solid #20a2ff !important"
    },
    "size-text ul>li>a": {
        "border": "2px solid transparent",
        "paddingTop": 4,
        "paddingRight": 5,
        "paddingBottom": 4,
        "paddingLeft": 5,
        "display": "inline-block",
        "cursor": "pointer",
        "WebkitTransition": "all .2s ease",
        "MozTransition": "all .2s ease",
        "OTransition": "all .2s ease",
        "transition": "all .2s ease"
    },
    "btn-demo": {
        "display": "inline-block",
        "textAlign": "center",
        "textTransform": "uppercase",
        "letterSpacing": 0.125,
        "fontFamily": "InterfaceB\", Arial, Helvetica, \"San-Serif",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "MsBorderRadius": 3,
        "OBorderRadius": 3,
        "borderRadius": 3,
        "color": "white",
        "paddingTop": 10,
        "paddingRight": 25,
        "paddingBottom": 10,
        "paddingLeft": 25,
        "WebkitTransition": "all 0.2s ease",
        "MozTransition": "all 0.2s ease",
        "OTransition": "all 0.2s ease",
        "transition": "all 0.2s ease"
    }
});