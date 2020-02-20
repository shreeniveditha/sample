import { Component, OnInit } from '@angular/core';

import { HttpClient} from '@angular/common/http';
 
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
  fileChanged(event){
    const files=event.target.files
  
    
    const data= new FormData()
    data.append('file',files[0])
    data.append('UPLOADCARE_STORE','1')
    data.append('UPLOADCARE_PUB_KEY','0d331b5348cc158fd1e4')
this.http.post('https://upload.uploadcare.com/base/',data)
  .subscribe(event =>{
    console.log(event)
  
  })

  }

}
