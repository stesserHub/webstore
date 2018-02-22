<template>
    <div>

        <div class="so-me">

            <div class="message">
                <div class="centered">
                    <svg>
                        <line x1="0" y1="13" x2="100" y2="13"/>
                    </svg>
                    <svg>
                        <text x="3" y="20">
                            {{msg}}
                        </text>
                    </svg>
                    <svg>
                        <line x1="0" y1="13" x2="100" y2="13"/>
                    </svg>
                </div> 
            </div>
           
            <div class="so-me-icon">
                <ul>
                    <li>
                        <img src="http://via.placeholder.com/85x85" alt="Card">
                    </li>
                        <li>
                        <img src="http://via.placeholder.com/85x85" alt="Card">
                    </li>
                        <li>
                        <img src="http://via.placeholder.com/85x85" alt="Card">
                    </li>
                        <li>
                        <img src="http://via.placeholder.com/85x85" alt="Card">
                    </li>
                        <li>
                        <img src="http://via.placeholder.com/85x85" alt="Card">
                    </li>
                        <li>
                        <img src="http://via.placeholder.com/85x85" alt="Card">
                    </li>
                </ul>
            </div>            

        </div>


        <div class="vue-footer">

            <div>
                <h5>
                    questions?
                </h5>

                <ul>
                    <li>
                        help
                    </li>
                    <li>
                        track order
                    </li>
                    <li>
                        returns
                    </li>
                </ul>
            </div>

            <div>
                <h5>
                    where to buy
                </h5>

                <ul>
                    <li>
                        store locator
                    </li>
                    <li>
                        wishlist
                    </li>
                    <li>
                        gift cards
                    </li>
                </ul>
            </div>

            <div>
                <h5>
                    about us
                </h5>

                <ul>
                    <li>
                        our story
                    </li>
                    <li>
                        careers
                    </li>
                    <li>
                        affiliates  
                    </li>
                </ul>
            </div>

            <div class="pay-type">
                <ul>
                    <li>
                        <img src="http://via.placeholder.com/34x22" alt="Card">
                    </li>
                    <li>
                        <img src="http://via.placeholder.com/34x22" alt="Card">
                    </li>
                    <li>
                        <img src="http://via.placeholder.com/34x22" alt="Card">
                    </li>
                    <li>
                        <img src="http://via.placeholder.com/34x22" alt="Card">
                    </li>
                    <li>
                        <img src="http://via.placeholder.com/34x22" alt="Card">
                    </li>
                    <li>
                        <img src="http://via.placeholder.com/34x22" alt="Card">
                    </li>
                </ul> 
            </div>

            <div class="identity">
                <p>
                    <img src="http://via.placeholder.com/177x27" alt="Card">
                </p>

                <p>
                    Subtitle
                </p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name:"vue-footer",
  props: ['msg']
}
</script>
