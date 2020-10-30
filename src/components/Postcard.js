import React from 'react';

import { Link } from 'react-router-dom';


function Postcard() {
   
    return(
       <div>
           <div className="container">       
           <div className="card mb-3 l ">
            <img src={require ('../images/genderequality.png')}   className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">THE PROBLEMS WITH GENDER INEQUALITY</h5>
                <p className="card-text">Gender inequality is the idea that men and women are not equal and that gender affects an individual's 
                living experience. These differences arise from distinctions in biology, psychology, and cultural norms. Some of these types of 
                distinctions are empirically grounded while others appear to be socially constructed. 
                Gender inequality also affects non-binary people. Studies show the different lived experiences of genders across many domains 
                including education, life expectancy, personality, interests, family life, careers, and political affiliations. Gender inequalit
                is experienced differently across different cultures</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to="/genderequality">
                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">Read More</button>
                </Link>
            </div>
            </div> 

             <div className="card mb-3 l ">
            <img src={require ('../images/Fridge.jpg')} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">CAKES</h5>
                <p className="card-text">Cake is a form of sweet food made from flour, sugar, and other ingredients, that 
                 is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide 
                 range of preparations that can be simple or elaborate, and that share features with other desserts such as 
                 pastries, meringues, custards, and pies. The most commonly used cake ingredients include flour, sugar, eggs,
                 butter or oil or margarine, a liquid, and leavening agents, such as baking soda or baking powder. Common 
                 additional ingredients and flavourings include dried, candied, or fresh fruit, nuts, cocoa, and extracts such
                 as vanilla, with numerous substitutions for the primary ingredients. Cakes can also be filled with fruit 
                 preserves, nuts or dessert sauces (like pastry cream), iced with buttercream or other icings, and decorated 
                 with marzipan, piped borders, or candied fruit.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to="/cake">
                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">Read More</button>
                </Link>
            </div>
            </div>

            <div className="card mb-3 l ">
            <img src={require ('../images/lightbulb.png')}   className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">THE POWER OF TEAMWORK</h5>
                <p className="card-text">Teamwork is the collaborative effort of a group to achieve a common goal or to 
                complete a task in the most effective and efficient way. This concept is seen within the greater 
                framework of a team, which is a group of interdependent individuals who work together towards a common 
                goal. Basic requirements for effective teamwork are an adequate team size. The context is important, 
                and team sizes can vary depending upon the objective. A team must include at least 2 or more members, and 
                most teams range in size from 2 to 100. Sports teams generally have fixed sizes based upon set rules, and 
                work teams may change in size depending upon the phase and complexity of the objective.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to="/teamwork">
                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">Read More</button>
                </Link>
            </div>
            </div>

            <div className="card mb-3 l ">
            <img src={require ('../images/berries.jpg')}  className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">BERRIES</h5>
                <p className="card-text">A berry is a small, pulpy, and often edible fruit. Typically, berries are juicy, 
                rounded, brightly colored, sweet, sour or tart, and do not have a stone or pit, although many pips or seeds 
                may be present. Common examples are strawberries, raspberries, blueberries, blackberries, red currants, 
                white currants and blackcurrants. In Britain, soft fruit is a horticultural term for such fruits. In common
                usage, the term "berry" differs from the scientific or botanical definition of a fruit produced from the 
                ovary of a single flower in which the outer layer of the ovary wall develops into an edible fleshy portion 
                (pericarp). The botanical definition includes many fruits that are not commonly known or referred to as 
                berries, such as grapes, tomatoes, cucumbers, eggplants, bananas, and chili peppers. </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to="/berries">
                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">Read More</button>
                </Link>
            </div>
            </div>
        </div>
       </div>
    );
}

export default Postcard;