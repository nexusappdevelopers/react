import CryptoJS from "crypto-js";
import { toast } from "react-toastify";
const secretKey = import.meta.env.VITE_SECRET_KEY;
const saveCookie = (cookieName: string, cookieValue: any) => {
  //setting cookie with expiry time
  document.cookie = cookieName + " = " + cookieValue + ";";
};
export const encryptData = (name: string, data: any) => {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();
  saveCookie(name, encrypted);
};
export const decryptData = (name: string) => {
  const encrypted = getCookie(name);
  if (encrypted) {
    // Decode the URL encoded cookie value
    const decodedEncrypted = decodeURIComponent(encrypted);
    const decrypted = CryptoJS.AES.decrypt(
      decodedEncrypted,
      secretKey
    ).toString(CryptoJS.enc.Utf8);
    try {
      return JSON.parse(decrypted);
    } catch (error) {
      console.error("Error parsing decrypted data:", error);
      return null;
    }
  }
  return null;
};
export const getCookie = (name: string) =>
  document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
export const deleteCookies = () => {
  const allCookies = document.cookie.split(";");

  for (let i = 0; i < allCookies.length; i++)
    document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString();
};

export const removeSingleCookie = (name: string) => {
  document.cookie = name + "=;expires=" + new Date(0).toUTCString();
};

export const getCookieData = (cookieName: string) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split("=")[1];
};
export const successMsg = (message: string) => {
  toast.dismiss();
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const normalFailMsg = (message: string) => {
  toast.dismiss();
  toast.error(message, {
    position: "top-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const errorMsg = (message: string) => {
  toast.dismiss();
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const Logout = () => {
  deleteCookies();
  window.location.href = "/sign-in";
};
export const showBootstrapModal = (elementId: string) => {
  const windowObj: any = window;
  const bootstrap: any = windowObj.bootstrap;
  // var myModalEl = document.querySelector(`#${elementId}`);
  // var modal = bootstrap.Modal.getOrCreateInstance(myModalEl);

  const bootstrapModal = new bootstrap.Modal(`#${elementId}`);
  bootstrapModal.show();
};
export const hideBootstrapModal = (elementId: string) => {
  const modalElement = document.getElementById(elementId);
  const windowObj: any = window;
  const modalInstance =
    windowObj.bootstrap.Modal.getOrCreateInstance(modalElement);
  let bootstrapModal =
    windowObj.bootstrap.Modal.getOrCreateInstance(modalElement);
  modalInstance.hide();
  bootstrapModal.hide();
};
export const IndustryListOptions = [
  { value: "Healthcare", label: "Healthcare" },
  { value: "Legal", label: "Legal" },
  { value: "Finance", label: "Finance" },
  { value: "Education", label: "Education" },
  { value: "Media & OTT", label: "Media & OTT" },
  { value: "Insurance", label: "Insurance" },
  { value: "Travel", label: "Travel" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Retail", label: "Retail" },
  { value: "IT & Telecom", label: "IT & Telecom" },
  { value: "Beauty and Lifestyle", label: "Beauty and Lifestyle" },
  { value: "Sports", label: "Sports" },
  { value: "On Demand", label: "On Demand" },
  { value: "Marketplace", label: "Marketplace" },
];
export const technologyOptions = [
  { value: "react", label: "React" },
  { value: "nextjs", label: "NextJS" },
  { value: "react-native", label: "React Native" },
];
