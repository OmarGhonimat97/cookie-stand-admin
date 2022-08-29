import { useState } from 'react';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

export default function ReportTable(props) {



  return (
    <table className='mb-12 col-span-2 col-start-3 m-2 bg-emerald-500 rounded-lg '>
      <thead className=' text-center border-2 border-emerald-700'>
        <tr className='border-2 border-emerald-600'>
          <th className='text-center font-bold px-5 border-2 border-emerald-600'>Location</th>

          {hours.map((hour, i) => {
            return (<th key={i} className='font-bold px-4 border-2 border-emerald-600'>{hour}</th>)
          }
          )}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody className="border-2 border-emerald-600">
        {
          props.tabledata.map((item) => {
            <tr key={item.location}>

            </tr>
          })
        }
      </tbody>
    </table>
  )
}
