import React from 'react'

const Accordion = () => {
    return (
        <div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3"/>
                <div className="collapse-title text-left font-bold">Include</div>
                <div className="collapse-content bg-base-200 text-justify">
                    <li>Round trip transportation to and from your hotel (Free in Ubud area. See below for other areas)</li>
                    <li>English speaking guides</li>
                    <li>Entry tickets to the waterfalls</li>
                    <li>Waterproof bag for your things</li>
                    <li>Mineral water</li>
                    <li>Towel for drying</li>
                    <li>Cold face towels for those hot days</li>
                    <li>Delicious lunch at the waterfall restaurant</li>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3"/>
                <div className="collapse-title font-bold text-left">Transportion</div>
                <div className="collapse-content bg-base-200 text-justify">
                    <li>Ubud – Free</li>
                    <li>Sanur – 200k</li>
                    <li>Kuta/Seminyak/Canggu – 300k</li>
                    <li>Nusa Dua – 500k</li>
                    <li>Amed/Candidasa – 700k</li>
                    <li>Others – Please contact us</li>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3"/>
                <div className="collapse-title text-left font-bold">Available Schedule </div>
                <div className="collapse-content bg-base-200 text-justify">
                    <p>Our Ubud Waterfall tours start at 9 am.  The tour lasts about 3.5 hours.</p>
                </div>
            </div>
        </div>
    )
}

export default Accordion
