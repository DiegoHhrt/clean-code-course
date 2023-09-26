// import axios from 'axios';

export class HttpClient {
    // get = async (url: string) => await axios.get(url);

    get = async (url: string) => {
        const resp = await fetch(url);
        const data = await resp.json();
        return { data };
    };
}
