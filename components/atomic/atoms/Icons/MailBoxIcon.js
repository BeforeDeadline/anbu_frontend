import React from "react";
import { SvgXml } from "react-native-svg";

const svgData = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="24" height="24" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_22_7424" transform="scale(0.0208333)"/>
</pattern>
<image id="image0_22_7424" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADjElEQVRoBe2Y30sUURTH/RP8D/JxBd1dNEwIY8PdpyiXfIsCqQwNoV6ih4TtoSd9sPDB1oyxLH9smbTLZD+MqwmhKGrobsruMPjjIQWZP+HGEc84d3ZmnJm9oxSzcLizM2fP+X7OPXPnzpaV+R/7FViuiJTLwWhCqm4UjC3a8zsQqbAf8YQ9pWBMloJRam0x+YRl2UuXr4pGrIUfgYGvvag2vQJV4UggVCtUhmrkylAtBQvXnaexK830WmsH7e5/Q5Mp0dIynV3HVP4IgNx5OJEcy8RtyjN3A+GVoVqCoq3G5hu3LEGcAKQ7u7AYct9Ixt1sBII1CSvBRtfOXWikT3oHMDkzugQ4iPHi3WTCvMwGV9yI1wIZQTgBGO4dZOChPS0htneVxObuvrL5Z5/yMGlnj75OTzEi7AJ86+hkfsfcW6Of7hfVe2tP6eEhWh9jYS3PCDEDgPNoRpVnAFKiIggT5QxEYWePW+X1EMMiUSHMAHQCVX+z831jmccMwIhIaGFnl0vr6AG+z/9SBfECSKZE9kEHpF5BLK/LXgDQgXHxjDoL6en5gyReQKwWtjwBYJ4NizmJegGxJm0zKxHHFqJ9qXSLOgMAwBsCxL/88IUKE1+9mQEjAF4QWvE/V9ZPFqBUCL14iIfLoectBMnQ3NwTRuJPDQAS40PIzuqE4qHaU3MraiFODSBzuLS+PXySWkGgeLhhh9JTdGB8kv5YyqoQ2EKp7mTR+8BG3SW1xdDPzmi4CmH7oHhoIzhn1U5a8XDDzq/miyC0grINVxkIy42bxQuSKYBePEIhBOwwF7J5urwhU9gm4FIJ4tFXD6EFeNU/QsntB3T2+j2aftTtqvoQzxDATDwKQwitIGgbrXj0BQi4Bu2k9ed1XARwnHgUNruUo6OfZyjcGwAEQvGafgQw7YOMl3iIwwB8JHMKnARBehGlfgcInsIxFgMA+2svxCM8JuU5MgCwKVrMFp4u5iQFk/IceQrHWEUAABGormnRvpjzOsakPMf/FCB89uDfN/gHzo1drK8nN2MNVG+jz3qo3gaFIfL8vSi4NeaFRn0xKPGAtF1umWlvonYMfEtMx//nPgD/mjqL6M+As3rx9/ZngH9NnUX0Z8BZvfh7+zPAv6bOIvoz4Kxe/L1JWzxiZyMHPqQ1HuavgENEcjcenm5vIiYgClwDUA6pvA9B2uIVIBaqDcfeZ/xHM/wFLNeIw4CmcTYAAAAASUVORK5CYII="/>
</defs>
</svg>

`;

const MailBoxIcon = () => {
  const Icon = <SvgXml xml={svgData} />;
  return Icon;
};

export default MailBoxIcon;
