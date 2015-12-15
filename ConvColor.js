/**
 * convert Color v1.0.0
 * (c) 2015 Yoshida Yuki
 * http://se.ykysd.com/
 * */
ConvColor = function( arg , alpha ){
  this.r = "";
  this.g = "";
  this.b = "";
  this.a = "1";
  this.keyword = {
      "ALICEBLUE" : "#F0F8FF",
      "ANTIQUEWHITE" : "#FAEBD7",
      "AQUA" : "#00FFFF",
      "AQUAMARINE" : "#7FFFD4",
      "AZURE" : "#F0FFFF",
      "BEIGE" : "#F5F5DC",
      "BISQUE" : "#FFE4C4",
      "BLACK" : "#000000",
      "BLANCHEDALMOND" : "#FFEBCD",
      "BLUE" : "#0000FF",
      "BLUEVIOLET" : "#8A2BE2",
      "BROWN" : "#A52A2A",
      "BURLYWOOD" : "#DEB887",
      "CADETBLUE" : "#5F9EA0",
      "CHARTREUSE" : "#7FFF00",
      "CHOCOLATE" : "#D2691E",
      "CORAL" : "#FF7F50",
      "CORNFLOWERBLUE" : "#6495ED",
      "CORNSILK" : "#FFF8DC",
      "CRIMSON" : "#DC143C",
      "CYAN" : "#00FFFF",
      "DARKBLUE" : "#00008B",
      "DARKCYAN" : "#008B8B",
      "DARKGOLDENROD" : "#B8860B",
      "DARKGRAY" : "#A9A9A9",
      "DARKGREEN" : "#006400",
      "DARKGREY" : "#A9A9A9",
      "DARKKHAKI" : "#BDB76B",
      "DARKMAGENTA" : "#8B008B",
      "DARKOLIVEGREEN" : "#556B2F",
      "DARKORANGE" : "#FF8C00",
      "DARKORCHID" : "#9932CC",
      "DARKRED" : "#8B0000",
      "DARKSALMON" : "#E9967A",
      "DARKSEAGREEN" : "#8FBC8F",
      "DARKSLATEBLUE" : "#483D8B",
      "DARKSLATEGRAY" : "#2F4F4F",
      "DARKSLATEGREY" : "#2F4F4F",
      "DARKTURQUOISE" : "#00CED1",
      "DARKVIOLET" : "#9400D3",
      "DEEPPINK" : "#FF1493",
      "DEEPSKYBLUE" : "#00BFFF",
      "DIMGRAY" : "#696969",
      "DIMGREY" : "#696969",
      "DODGERBLUE" : "#1E90FF",
      "FIREBRICK" : "#B22222",
      "FLORALWHITE" : "#FFFAF0",
      "FORESTGREEN" : "#228B22",
      "FUCHSIA" : "#FF00FF",
      "GAINSBORO" : "#DCDCDC",
      "GHOSTWHITE" : "#F8F8FF",
      "GOLD" : "#FFD700",
      "GOLDENROD" : "#DAA520",
      "GRAY" : "#808080",
      "GREEN" : "#008000",
      "GREENYELLOW" : "#ADFF2F",
      "GREY" : "#808080",
      "HONEYDEW" : "#F0FFF0",
      "HOTPINK" : "#FF69B4",
      "INDIANRED" : "#CD5C5C",
      "INDIGO" : "#4B0082",
      "IVORY" : "#FFFFF0",
      "KHAKI" : "#F0E68C",
      "LAVENDER" : "#E6E6FA",
      "LAVENDERBLUSH" : "#FFF0F5",
      "LAWNGREEN" : "#7CFC00",
      "LEMONCHIFFON" : "#FFFACD",
      "LIGHTBLUE" : "#ADD8E6",
      "LIGHTCORAL" : "#F08080",
      "LIGHTCYAN" : "#E0FFFF",
      "LIGHTGOLDENRODYELLOW" : "#FAFAD2",
      "LIGHTGRAY" : "#D3D3D3",
      "LIGHTGREEN" : "#90EE90",
      "LIGHTGREY" : "#D3D3D3",
      "LIGHTPINK" : "#FFB6C1",
      "LIGHTSALMON" : "#FFA07A",
      "LIGHTSEAGREEN" : "#20B2AA",
      "LIGHTSKYBLUE" : "#87CEFA",
      "LIGHTSLATEGRAY" : "#778899",
      "LIGHTSLATEGREY" : "#778899",
      "LIGHTSTEELBLUE" : "#B0C4DE",
      "LIGHTYELLOW" : "#FFFFE0",
      "LIME" : "#00FF00",
      "LIMEGREEN" : "#32CD32",
      "LINEN" : "#FAF0E6",
      "MAGENTA" : "#FF00FF",
      "MAROON" : "#800000",
      "MEDIUMAQUAMARINE" : "#66CDAA",
      "MEDIUMBLUE" : "#0000CD",
      "MEDIUMORCHID" : "#BA55D3",
      "MEDIUMPURPLE" : "#9370DB",
      "MEDIUMSEAGREEN" : "#3CB371",
      "MEDIUMSLATEBLUE" : "#7B68EE",
      "MEDIUMSPRINGGREEN" : "#00FA9A",
      "MEDIUMTURQUOISE" : "#48D1CC",
      "MEDIUMVIOLETRED" : "#C71585",
      "MIDNIGHTBLUE" : "#191970",
      "MINTCREAM" : "#F5FFFA",
      "MISTYROSE" : "#FFE4E1",
      "MOCCASIN" : "#FFE4B5",
      "NAVAJOWHITE" : "#FFDEAD",
      "NAVY" : "#000080",
      "OLDLACE" : "#FDF5E6",
      "OLIVE" : "#808000",
      "OLIVEDRAB" : "#6B8E23",
      "ORANGE" : "#FFA500",
      "ORANGERED" : "#FF4500",
      "ORCHID" : "#DA70D6",
      "PALEGOLDENROD" : "#EEE8AA",
      "PALEGREEN" : "#98FB98",
      "PALETURQUOISE" : "#AFEEEE",
      "PALEVIOLETRED" : "#DB7093",
      "PAPAYAWHIP" : "#FFEFD5",
      "PEACHPUFF" : "#FFDAB9",
      "PERU" : "#CD853F",
      "PINK" : "#FFC0CB",
      "PLUM" : "#DDA0DD",
      "POWDERBLUE" : "#B0E0E6",
      "PURPLE" : "#800080",
      "RED" : "#FF0000",
      "ROSYBROWN" : "#BC8F8F",
      "ROYALBLUE" : "#4169E1",
      "SADDLEBROWN" : "#8B4513",
      "SALMON" : "#FA8072",
      "SANDYBROWN" : "#F4A460",
      "SEAGREEN" : "#2E8B57",
      "SEASHELL" : "#FFF5EE",
      "SIENNA" : "#A0522D",
      "SILVER" : "#C0C0C0",
      "SKYBLUE" : "#87CEEB",
      "SLATEBLUE" : "#6A5ACD",
      "SLATEGRAY" : "#708090",
      "SLATEGREY" : "#708090",
      "SNOW" : "#FFFAFA",
      "SPRINGGREEN" : "#00FF7F",
      "STEELBLUE" : "#4682B4",
      "TAN" : "#D2B48C",
      "TEAL" : "#008080",
      "THISTLE" : "#D8BFD8",
      "TOMATO" : "#FF6347",
      "TURQUOISE" : "#40E0D0",
      "VIOLET" : "#EE82EE",
      "WHEAT" : "#F5DEB3",
      "WHITE" : "#FFFFFF",
      "WHITESMOKE" : "#F5F5F5",
      "YELLOW" : "#FFFF00",
      "YELLOWGREEN" : "#9ACD32"
  }

  //
  arg  = arg.toUpperCase()
  // keyword to HexColor
  if( typeof( this.keyword[ arg ] ) != "undefined" ){
    arg = this.keyword[ arg ];
  }
  if(  arg.match( /^#[0-9A-F]{3,8}$/ ) ){   // e.x. #FFF or #FFFFFF or #00FFFFFF
    this.setColor( arg );
  }else if( arg.match( /(rgb\(|rgba\() */i ) ){    // e.x. rgb( 0 , 0 , 0) or rgba( 0 , 0 , 0 , 0.5)
    this.setRgb( arg );
  }else{
    // error
    return null;
  }

  // opacityの計算
  if( typeof alpha != "undefined" && alpha == parseFloat( alpha ) ){
    if( alpha > 1 ){
      alpha = alpha / 100;
    }
    this.a = alpha;
  }

};

ConvColor.prototype.getRgb = function(){
  return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
}
ConvColor.prototype.getRgba = function(){
  return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
}
ConvColor.prototype.getColor = function(){
  return "#"
    + ( ( '0' + ( this.r - 0 ).toString(16) ) ).substr(-2)
    + ( ( '0' + ( this.g - 0 ).toString(16) ) ).substr(-2)
    + ( ( '0' + ( this.b - 0 ).toString(16) ) ).substr(-2)
  ;
}
ConvColor.prototype.getAColor = function(){
  return "#"
    + ( ( '0' + ( parseInt( this.a * 255 , 10 ) - 0 ).toString(16) ) ).substr(-2)
    + ( ( '0' + ( this.r - 0 ).toString(16) ) ).substr(-2)
    + ( ( '0' + ( this.g - 0 ).toString(16) ) ).substr(-2)
    + ( ( '0' + ( this.b - 0 ).toString(16) ) ).substr(-2)
  ;
}
ConvColor.prototype.setColor = function( arg ){
  if( typeof( this.keyword[ arg ] ) != "undefined" ){
    arg = this.keyword[ arg ];
  }
  if(  arg.match( /^#[0-9A-F]{3,8}$/ ) ){   // e.x. #FFF or #FFFFFF or #00FFFFFF
    var argLen = arg.length ;
    if( argLen === 4 ){     // e.x. #FFF
      this.r = arg.substr( 1 , 1 );
      this.r = parseInt( this.r + "" + this.r , 16 );
      this.g = arg.substr( 2 , 1 );
      this.g = parseInt( this.g + "" + this.g , 16 );
      this.b = arg.substr( 3 , 1 );
      this.b = parseInt( this.b + "" + this.b , 16 );
    }else if( argLen === 7 ){     // e.x. #FFFFFF
      this.r = parseInt( arg.substr( 1 , 2 ) , 16 );
      this.g = parseInt( arg.substr( 3 , 2 ) , 16 );
      this.b = parseInt( arg.substr( 5 , 2 ) , 16 );
    }else if( argLen === 9 ){     // e.x. #00FFFFFF
      this.r = parseInt( arg.substr( 3 , 2 ) , 16 );
      this.g = parseInt( arg.substr( 5 , 2 ) , 16 );
      this.b = parseInt( arg.substr( 7 , 2 ) , 16 );
      this.a = parseInt( arg.substr( 1 , 2 ) , 16 ) / 100;
    }
  }else{
    return false;
  }
}
ConvColor.prototype.setRgb = function( arg ){
  if( !arg.match( /(rgb\(|rgba\() */i ) ){
    return false;
  }
  arg = ( ( arg.replace( /(rgb\(|rgba\() */i , "" ) ).replace( /\)/i , "" ) ).replace( / /g , "" );
  var ary = arg.split( "," );
  // 入力値チェック
  if( ary[0] != parseInt( ary[0] , 10 ) || ary[1] != parseInt( ary[1] , 10 ) || ary[2] != parseInt( ary[2] , 10 ) ){
    // error
    return null;
  }
  this.r = ary[0];
  this.g = ary[1];
  this.b = ary[2];
  if( typeof( ary[3] ) != "undefined" && ary[3] == parseFloat( ary[3] ) ){
    this.a = ary[3];
  }

}
ConvColor.prototype.setOpacity = function( arg ){
  if( typeof arg == "undefined" || arg != parseFloat( arg ) ){
    return false;
  }
  if( arg > 1 ){
    arg = arg / 100;
  }
  this.a = arg;
}
