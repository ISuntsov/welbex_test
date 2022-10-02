import httpService from './http.service';

const citiesDataEndpoint = 'cities/';

const citiesDataService = {
    get: async () => {
        const { data } = await httpService.get(citiesDataEndpoint);
        return data;
    }
};

export default citiesDataService;
