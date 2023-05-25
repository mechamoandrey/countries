import { getStorageObject } from "./utils";

export const state = {
  allCountries: getStorageObject('allCountries') || '',
  europe: getStorageObject('europe') || '',
  africa: getStorageObject('africa') || '',
  oceania: getStorageObject('oceania') || '',
  asia: getStorageObject('asia') || '',
  americas: getStorageObject('americas') || '',
}