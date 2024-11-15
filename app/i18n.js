import {getRequestConfig} from "next-intl/server" ;
import {notFound} from "next-intl/server" ;
import {locales} from './config' ;
//import { message } from "antd";

export default getRequestConfig( async ([locale]) =>{
    if(!locales.includes(locale)) notFound() ;

    return{
        message:(await import('./messages/${locale}.json')).default,
    }
}
) ;