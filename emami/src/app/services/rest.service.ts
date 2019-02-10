import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

private isUserLoggedIn;
private name;

constructor(private http: HttpClient) {
this.isUserLoggedIn = false;
}

setUserLoggedIn() {
this.isUserLoggedIn = true;
}

getUserLoggedIn() {
return this.isUserLoggedIn;
}

postRequest(url,param){
  console.log(url,param);
  return this.http.post(url, param);
}

getGeoCode(address){
  return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address='"+address+"'&key=AIzaSyDWqWkIoi64fC6BDBXUZDmLiwVo_vkEYXc");
}

doctorloginservice(param, headers) {

return this.http.post('http://localhost:8080/emami/homeemami', param, headers);
}
AgainLoginSucess(param, headers) {
return this.http.post('http://localhost:8080/emami/login1', param, headers);

}
PatientHome() {
return this.http.get('http://localhost:8080/emami/user/home55');

}

getSingleEmployee() {
return this.http.get('http://localhost:8080/Tech/init');

}
editSingleEmployee() {
return this.http.get('http://localhost:8080/Tech/init/updateEmp');
}
register(json, headers) {
return this.http.post('http://localhost:8080/emami/registration1', json, { headers: headers });
}
register_process(json, headers) {
return this.http.post('http://localhost:8080/emami/registration-step-1-process1', json, { headers: headers });
}
saveEditAdmin(params, headers) {
return this.http.post('http://localhost:8080/Tech/updatedSaveAdmin', params, { headers: headers })
}
getAllUser() {
return this.http.get('http://localhost:8080/Tech//getAllUser');
}
// registerEmployeeRecord(){
// return this.http.post('http://localhost:8080/Tech/registerEmpRecord',params,{headers:headers});
// }

deleteSingleUser(USERNAME) {
return this.http.get('http://localhost:8080/Tech/deleteSingleUser?empIdToDelete=' + USERNAME);
}
adminEdit(site_id) {

return this.http.get('http://localhost:8080/Tech/updatedSingleUser?user=' + site_id);
}

employeeEdit(id) {
return this.http.get('http://localhost:8080/Tech/updatedSingleEmployeeUser?id=' + id);
}
saveEditEmployee(id, name, email, password) {
const tempVar: String = 'http://localhost:8080/Tech/updatedSaveEmployee?id=' + id + '&name=' + name;
console.log('helow');
return this.http.get(tempVar + '&email=' + email + '&password=' + password);

}
setUser(user, email) {
return this.http.get('http://localhost:8080/Tech/setUser?uname=' + user + '&email=' + email + '');
}
}
