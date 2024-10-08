// module imports
import {getRequestConfig} from 'next-intl/server';
import { notFound } from 'next/navigation';
 
const locales = ['en', 'hi'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`./utils/languageContent/${locale}.json`)).default
  };
});