/**
 * Created by Adrian on 9/10/2017.
 */
import { InjectionToken } from "@angular/core";
import { IAppConfig } from "./app-config.interface";

export const APP_DI_CONFIG: IAppConfig = {

  BACKEND_URL: 'http://localhost:5000'

};

export let APP_CONFIG = new InjectionToken< IAppConfig >( 'app.config' );
