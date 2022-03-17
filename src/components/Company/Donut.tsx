import React from "react";
import Chart from 'react-apexcharts'



export const Donut = () => {


   const state = {
       options: {
           series: [35, 65],
           labels: ['Males', 'Female'],
           colors: ['#54A4FA', '#1D7CF7']
       },

   }

        return (
            <div className="donut">
                <Chart options={state.options} series={state.options.series}   type="donut" width="380" />
            </div>
        )

}

