import { InjectionToken } from '@angular/core'

export const AUTH_API_URL = new InjectionToken<string>('http://localhost:50001/');
export const BEE_FARM_API_URL = new InjectionToken<string>('http://localhost:50000/');