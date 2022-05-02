import { Lead, PrismaClient } from '@prisma/client';
import * as csv from 'csv-parser';
import * as fs from 'fs';
import * as moment from 'moment';

const leads = [];
const prisma = new PrismaClient();

fs.createReadStream('apps/api/prisma/sample_data.csv') // commands runs from root of the folder
  .pipe(csv())
  .on('data', (data) => leads.push(data))
  .on('end', async () => {
    const data: Omit<Lead, 'id'>[] = leads.map((lead) => {
      let last_activity_date: string | Date = lead['Last Activity Date'];
      let lead_conversion_date: string | Date = lead['Lead Conversion Date'];

      if ((last_activity_date as string).includes('-')) {
        last_activity_date = moment(
          last_activity_date,
          'DD-MM-YYYY h:mm:ss'
        ).toDate();
      } else {
        last_activity_date = moment(
          last_activity_date,
          'DD/MM/YYYY h:mm:ss'
        ).toDate();
      }

      if ((lead_conversion_date as string).includes('-')) {
        lead_conversion_date = moment(
          lead_conversion_date,
          'DD-MM-YYYY h:mm:ss'
        ).toDate();
      } else {
        lead_conversion_date = moment(
          lead_conversion_date,
          'DD/MM/YYYY h:mm:ss'
        ).toDate();
      }

      return {
        lead_number: +lead['Lead Number'],
        origin: lead['Lead Origin'],
        source: lead['Lead Source'],
        notes: lead['Notes']?.trim(),
        stage: lead['Lead Stage'],
        engagement_score: parseFloat(lead['Engagement Score']),
        total_visits: +lead['TotalVisits'],
        page_views_per_visit: parseFloat(lead['Page Views Per Visit']),
        average_time_per_visit: parseFloat(lead['Average Time Per Visit']),
        last_activity: lead['Last Activity'],
        last_activity_date,
        lead_conversion_date,
        city_old: lead['Cityold'],
        specialization: lead['Specialization'],
        entrance_test: lead['Entrance Test'],
        current_occupation: lead['What is your current occupation'],
      };
    });

    console.log('Seeding leads...');
    await prisma.lead.createMany({
      data,
    });
  });
