import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Button from './Buttons';

function Berries () {
    return (
        <div>
            <Navbar />
            <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
            <h1 className="display-4">BERRIES</h1>
        </div>
        </div>
        <div >
        <div class="card-body container">
       <p>A berry is a small, pulpy, and often edible fruit. Typically, berries are juicy, rounded, brightly colored, sweet, 
          sour or tart, and do not have a stone or pit, although many pips or seeds may be present. Common examples are 
          strawberries, raspberries, blueberries, blackberries, red currants, white currants and blackcurrants. In Britain,
          soft fruit is a horticultural term for such fruits. In common usage, the term "berry" differs from the scientific or 
          botanical definition of a fruit produced from the ovary of a single flower in which the outer layer of the ovary wall 
          develops into an edible fleshy portion (pericarp). The botanical definition includes many fruits that are not commonly
          known or referred to as berries, such as grapes, tomatoes, cucumbers, eggplants, bananas, and chili peppers. Fruits 
          commonly considered berries but excluded by the botanical definition include strawberries, raspberries, and 
          blackberries, which are aggregate fruits and mulberries, which are multiple fruits. Watermelons and pumpkins are 
          giant berries that fall into the category "pepos". A plant bearing berries is said to be bacciferous or baccate.</p>

            <p>Berries are eaten worldwide and often used in jams, preserves, cakes, or pies. Some berries are commercially
               important. The berry industry varies from country to country as do types of berries cultivated or growing in 
               the wild. Some berries such as raspberries and strawberries have been bred for hundreds of years and are 
               distinct from their wild counterparts, while other berries, such as lingonberries and cloudberries, grow 
               almost exclusively in the wild.While many berries are edible, some are poisonous to humans, such as deadly 
               nightshade and pokeweed. Others, such as the white mulberry, red mulberry, and elderberry, are poisonous when 
               unripe, but are edible when ripe.</p>

            <p>Berries are commonly used in pies or tarts, such as blueberry pie, blackberry pie, and strawberry pie. 
               Berries are often used in baking, such as blueberry muffins, blackberry muffins, berry cobblers, berry 
               crisps, berry cakes, berry buckles, berry crumb cakes, berry tea cakes, and berry cookies. Berries are 
               commonly incorporated whole into the batter for baking, and care is often taken so as to not burst the 
               berries. Frozen or dried berries may be preferable for some baked berry products. Fresh berries are also 
               often incorporated into baked berry desserts, sometimes with cream, either as a filling to the dessert or 
               as a topping.</p>

               <p>Berries are often added to water and/or juiced, as in cranberry juice, which accounts for 95% of 
                   cranberry crop usage, blueberry juice, raspberry juice, goji berry juice, acai juice, aronia berry 
                   uice, and strawberry juice. Wine is the principal fermented beverage made from berries (grapes). 
                   ruit wines are commonly made out of other berries. In most cases, sugars must be added to the berry juices 
                   in the process of Chaptalization to increase the alcohol content of the wine. Examples of fruit wines made 
                   from berries include: elderberry wine, strawberry wine, blueberry wine, blackberry wine, redcurrant wine, 
                   huckleberry wine, goji wine and cranberry wine. Berries are used in some styles of beer, particularly 
                   framboise (made with raspberry) and other fruit lambics.</p>

            <Button />
            <Footer />
          </div>
         </div>
        </div>
    );
}

export default Berries;