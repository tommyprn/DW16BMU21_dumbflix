import React, {Component} from 'react';
import '../App.css';

class Mov extends Component{
    render(){    
        return(
            <div className="latest">
                <p className="movies">
                    Movies
                </p>

                <div className="thumbnail-movies">
                    <div class="row justify-content-between">
                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/102381961_3056945904344776_9190895852099469312_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_eui2=AeHeNxjr4bVnGFMsCTGGXzXVlOdnPUOHlUiU52c9Q4eVSFXMMo9D6-opFvsrT1clbwy3V_yy7zqciBnEbWT_EXAz&_nc_ohc=tNNobrRn3bcAX8jHHdG&_nc_ht=scontent-sin6-1.xx&oh=0ebb4beae0ebfbce61a7a983e8cdf8bb&oe=5EFCE4AE"/>
                                <p>The Godfather</p>
                                <p>1972</p>
                            </div>
                        </div>     

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/102580398_3056945874344779_7809556184121212928_n.jpg?_nc_cat=104&_nc_sid=730e14&_nc_eui2=AeGwn2lBbA1Gh_LyrTEjDc0leUzbH8w9Px95TNsfzD0_Hx7vZF0V0wcdTyCdGc8Vu6eBwMmCHhzzg1Ve3BYmriBU&_nc_ohc=2hk08LKWEP0AX9DzITF&_nc_ht=scontent-sin6-1.xx&oh=dcecfc2d7e820d20b1422c4bc35ab8f1&oe=5EFEFED8"/>
                                <p>Avengers: Endgame</p>
                                <p>2019</p>
                            </div>
                        </div>    

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/100051886_3056945871011446_914147973221318656_n.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeH0BAv9Bs-AYOjhBtKKv-4HUGMTygOT2D5QYxPKA5PYPrtjDdBlodnf5UpLsEp9ivxlASKHAq6xEK4l2SiFb6QU&_nc_ohc=VycDMNL8v9EAX-17kQa&_nc_ht=scontent-sin6-2.xx&oh=e9c406321b2f4f3a349a7d03033f627f&oe=5EFDDB09"/>
                                <p>Batman: The Dark Knight</p>
                                <p>2008</p>
                            </div>
                        </div>

                        <div class="col justify-content-between">    
                            <div class="row-2">
                                <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/102104559_3056945824344784_7876618709719056384_n.jpg?_nc_cat=108&_nc_sid=730e14&_nc_eui2=AeED2qGaeNiGKeMMDMNKDqWuMdSlQAk_9dsx1KVACT_1267rcslj9d7np_6mTE0hJTORRbrlgmHfJRhyZHe7Omq4&_nc_ohc=QJBaRpzqx0cAX-byQG9&_nc_ht=scontent-sin6-2.xx&oh=4844685e095dcce38e6125d2e668241a&oe=5EFD83EC"/>
                                <p>Parasite</p>
                                <p>2019</p>                       
                            </div>
                        </div>

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/77391554_3056945771011456_5916263823278342144_n.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeEQFgqeg2us486GeOgQGwDAr-E6u6Bv7nOv4Tq7oG_uc_XZVbvWbowtZeT6PWWETUOBMr79u07tVw5B8ofvTnmR&_nc_ohc=JUD7aOpiekEAX9XEcug&_nc_ht=scontent-sin6-2.xx&oh=514926269810b4a24692c5560ad62f26&oe=5EFF4156"/>
                                <p>Joker</p>
                                <p>2019</p>
                            </div>
                        </div>

                        <div class="col justify-content-between">
                            <div class="row-2">
                                <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/101052335_3056945761011457_1108572655855861760_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_eui2=AeE3ium2AUKfyPpU22LaQAqLwYMRHvyTaa7BgxEe_JNprkHsWB4_kwnF5eNBY8AvVg69VK8rECLNUMURosg6OdkE&_nc_ohc=4-Thf7HBhj4AX_PZDbA&_nc_ht=scontent-sin6-1.xx&oh=7a0bcbf260fdf1b2a3e23697a7fb0280&oe=5EFD4415"/>
                                <p>Chernobyl</p>
                                <p>2013</p>
                            </div>
                        </div>    
                    </div>
                </div> 
            </div>    
        )    
    }
}

export default Mov;