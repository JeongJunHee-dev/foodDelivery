import { ApiContants } from "../constant";

const getFlagIcon = (code="KR", style=ApiContants.COUNTRY_FLAG.FLAT, size= ApiContants.COUNTRY_FLAG.BASE_URL) => 
                    `${ApiContants.COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}.png`;

export default {getFlagIcon};