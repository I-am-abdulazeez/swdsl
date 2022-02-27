export const shadowXs: string = "#b33b32 0px 0px 0px 1px";
export const shadowSm: string = "#b33b32 0px 0px 0px 2px";
export const shadowMd: string = "#b33b32 0px 0px 0px 3px";
export const shadowLightMd: string = "0 0 0 3px #C97200";
export const inputFocus: object = {
  borderColor: "primary.500",
  boxShadow: "#b33b32 0px 0px 0px 1px",
};

export const numberWithCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const nigeriaPhoneNumberPattern =
  /((^90)([0-9]))|((^70)([0-9]))|((^80)([0-9]))|((^81)([0-9]))(\d{7})/;
