import React from 'react';
import './currency.css';


function CurrencyItem({data}) {
    const live = data.metrics.market_data.percent_change_usd_last_24_hours ? data.metrics.market_data.percent_change_usd_last_24_hours.toFixed(2) : ""
    return (
        <div>
            <div className="currency_item">
                <div className="curr_left">
                    <img src="data:image/png;base64,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" alt="" />
                    <div className='curr_name'>
                        <h5>{data.name}</h5>
                        <span>{data.symbol}</span>
                    </div>
                </div>
                <div className="curr_right">
                    <h5>${data.metrics.market_data.price_usd}</h5>
                    <span>+{live}</span>
                </div>
            </div>
        </div>
    )
}

export default CurrencyItem