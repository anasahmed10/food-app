import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SNjumRqP0_ub7XwmYJ1cmkdW8AwXKnT23AqXUusYRXWa85Eu4pJubmG6J3tldeCNSb_tKgwpdlThBBNBrRBujlYsk5N_xgKAgJLiWfv0ZKpvClYEqxBlHWwuv1tgYXYx'
    }
})