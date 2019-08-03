import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { Form } from 'src/app/models/form';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public canvasWidth = 150;
  public needleValue = 50;
  public centralLabel = '';
  public name = '';
  public bottomLabel = '';
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['red', 'yellow', 'green'],
    arcDelimiters: [33, 67],
    rangeLabel: ['E', 'F'],
    needleStartValue: 60,
  };

  public ax = false;
  public gn = false;
  public qua = false;
  public pav = false;
  public aud = false;
  public mb_ = false;
  public maz = false;
  public air = false;
  public eng = false;
  public abs = false;
  public oil = false;

  @ViewChild('sig1') signaturePad: SignaturePad;
  @ViewChild('sig2') signaturePad2: SignaturePad;
  @ViewChild('sig3') signaturePad3: SignaturePad;
  @ViewChild('sig4') signaturePad4: SignaturePad;
  public signaturePadOptions: Object = {
    'minWidth': 0.7,
    'maxWidth': 0.8,
    'penColor': 'rgb(255,0,0)',
    'canvasWidth': 189,
    'canvasHeight': 125
  };
  save = 2;
  public key = '';
  myForm: FormGroup;
  uploadedImage: Blob;
  form_ = {
    $key: '',
    orden: null,
    reporte: null,
    estado: '',
    marca: '',
    modelo: '',
    color: '',
    placas: '',
    grua: '',
    km: '',
    serie: '',
    aseg: '',
    sini: '',
    ingreso: '',
    circu: '',
    nombre: '',
    tel: '',
    datos: '',
    obser: '',
    uluces: '',
    qluces: '',
    antena: '',
    espejosl: '',
    crista: '',
    emblem: '',
    moldur: '',
    tapong: '',
    carroc: '',
    claxon: '',
    llantas: '',
    taponer: '',
    centror: '',
    limpia: '',
    espejor: '',
    tablero: '',
    airea: '',
    radio: '',
    bocinas: '',
    encend: '',
    cenice: '',
    cintur: '',
    botoni: '',
    maniji: '',
    vestid: '',
    tapete: '',
    poliza: '',
    tapona: '',
    taponra: '',
    varilla: '',
    filtro: '',
    bateria: '',
    gato: '',
    herram: '',
    trian: '',
    llantar: '',
    exting: '',
    infoa: '',
    cambioaf: false,
    cambioat: false,
    cambioad: false,
    cambioadl: false,
    afinac: false,
    limpiny: false,
    limpca: false,
    cambioan: false,
    cambiolf: false,
    balanc: false,
    alineac: false,
    limpaju: false,
    cambioli: false,
    lavadoc: false,
    lavadom: false,
    pulidoe: false,
    lavadov: false,
    pulidof: false,
    total: '',
    vfecha1: '',
    vnombre1: '',
    vhora1: '',
    vtraba1: '',
    vpreci1: '',
    vfechae1: '',
    vhorae1: '',
    vfirma1: '',
    vfecha2: '',
    vnombre2: '',
    vhora2: '',
    vtraba2: '',
    vpreci2: '',
    vfechae2: '',
    vhorae2: '',
    vfirma2: '',
    gas: null,
    airbag: false,
    engine: false,
    abs: false,
    oil: false,
    axa: false,
    gnp: false,
    qualitas: false,
    pavel: false,
    audi: false,
    mb: false,
    mazda: false,
    povet: false,
    tcar: '',
    dere: '',
    frente: '',
    detras: '',
    izq: '',
    firma1: '',
    firma2: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    img5: '',
    img6: '',
    img7: '',
    img8: '',
    hinicio: '',
    hfin: '',
    htiempo: '',
    hnombre: '',
    hfirma1: '',
    hfirma2: '',
    pinicio: '',
    pfin: '',
    ptiempo: '',
    pnombre: '',
    pfirma1: '',
    pfirma2: '',
    piinicio: '',
    pifin: '',
    pitiempo: '',
    pinombre: '',
    pifirma1: '',
    pifirma2: '',
    puinicio: '',
    pufin: '',
    putiempo: '',
    punombre: '',
    pufirma1: '',
    pufirma2: '',
    ainicio: '',
    afin: '',
    atiempo: '',
    anombre: '',
    afirma1: '',
    afirma2: '',
    linicio: '',
    lfin: '',
    ltiempo: '',
    lnombre: '',
    lfirma1: '',
    lfirma2: ''
  };

  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    public formApi: FormService,
    private ng2ImgMax: Ng2ImgMaxService,
    public sanitizer: DomSanitizer,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.formApi.GetFormsList();
    this.key = this.actRouter.snapshot.paramMap.get('key');
    this.formApi.GetForm(this.key).valueChanges().subscribe(data => {
      this.form_ = data;
      this.signaturePad.fromDataURL(this.form_.dere);
      this.signaturePad2.fromDataURL(this.form_.frente);
      this.signaturePad3.fromDataURL(this.form_.detras);
      this.signaturePad4.fromDataURL(this.form_.izq);
      this.ax = this.form_.axa;
      this.gn = this.form_.gnp;
      this.qua = this.form_.qualitas;
      this.pav = this.form_.pavel;
      this.aud = this.form_.audi;
      this.mb_ = this.form_.mb;
      this.maz = this.form_.mazda;
      this.air = this.form_.airbag;
      this.eng = this.form_.engine;
      this.abs = this.form_.abs;
      this.oil = this.form_.oil;
      this.needleValue = this.form_.gas;
    });
    this.sForm();
  }

  /* ResetForm() {
    this.myForm.reset();
  } */

  submitSurveyData = () => {
    // this.formApi.AddForm(this.form_);
    this.formApi.UpdateForm(this.form_, this.key);
    this.toastr.success('Actualizado!');
  }

  sForm() {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      orden: ['', [Validators.required]],
      marca: [''],
      modelo: [''],
      color: [''],
      placas: [''],
      grua: [''],
      km: [''],
      serie: [''],
      aseg: [''],
      sini: [''],
      ingreso: [''],
      circu: [''],
      tel: [''],
      datos: [''],
      obser: [''],
      gato: [false],
      herra: [false],
      trian: [false],
      tapet: [false],
      llanta: [false],
      extin: [false],
      antena: [false],
      emble: [false],
      tapo: [false],
      cables: [false],
      stereo: [false],
      encen: [false],
      gas: [''],
      desc1: [''],
      desc2: [''],
      desc3: [''],
      desc4: [''],
      desc5: [''],
      desc6: [''],
      desc7: [''],
      desc8: ['']
    });
  }

  imgChanged($event) {
    this.form_.firma1 = $event.target.src;
  }
  imgChanged2($event) {
    this.form_.firma2 = $event.target.src;
  }

  changeListener($event): void {
    this.readThis($event.target);
    // console.log($event.target.name);
  }

  readThis(inputValue: any): void {
    const ima = inputValue.files[0];
    this.ng2ImgMax.resizeImage(ima, 400, 400).subscribe(
      result => {
        this.uploadedImage = result;
        const myReader: FileReader = new FileReader();
        myReader.readAsDataURL(this.uploadedImage);
        myReader.onload = (e) => {
          if (inputValue.name === 'img1') {
            this.form_.img1 = <string>myReader.result;
          }
          if (inputValue.name === 'img2') {
            this.form_.img2 = <string>myReader.result;
          }
          if (inputValue.name === 'img3') {
            this.form_.img3 = <string>myReader.result;
          }
          if (inputValue.name === 'img4') {
            this.form_.img4 = <string>myReader.result;
          }
          if (inputValue.name === 'img5') {
            this.form_.img5 = <string>myReader.result;
          }
          if (inputValue.name === 'img6') {
            this.form_.img6 = <string>myReader.result;
          }
          if (inputValue.name === 'img7') {
            this.form_.img7 = <string>myReader.result;
          }
          if (inputValue.name === 'img8') {
            this.form_.img8 = <string>myReader.result;
          }
          // this.logo = <string>myReader.result;
          this.toastr.success('Imagen cargada correctamente!');
        };
      },
      error => {
        this.toastr.error('Imagen invalida!');
      }
    );
  }

  drawComplete() {
    this.form_.dere = this.signaturePad.toDataURL();
  }
  drawComplete2() {
    this.form_.frente = this.signaturePad2.toDataURL();
  }
  drawComplete3() {
    this.form_.detras = this.signaturePad3.toDataURL();
  }
  drawComplete4() {
    this.form_.izq = this.signaturePad4.toDataURL();
  }
  clear1() {
    this.signaturePad.clear();
    this.form_.dere = this.signaturePad.toDataURL();
  }

  clear2() {
    this.signaturePad2.clear();
    this.form_.frente = this.signaturePad2.toDataURL();
  }

  clear3() {
    this.signaturePad3.clear();
    this.form_.detras = this.signaturePad3.toDataURL();
  }

  clear4() {
    this.signaturePad4.clear();
    this.form_.izq = this.signaturePad4.toDataURL();
  }
  combus(ev) {
    // console.log(ev.srcElement.value);
    this.needleValue = ev.srcElement.value;
  }
  axa() {
    this.ax = !this.ax;
    this.form_.axa = !this.form_.axa;
  }

  gnp() {
    this.gn = !this.gn;
    this.form_.gnp = !this.form_.gnp;
  }

  qualitas() {
    this.qua = !this.qua;
    this.form_.qualitas = !this.form_.qualitas;
  }

  pavel() {
    this.pav = !this.pav;
    this.form_.pavel = !this.form_.pavel;
  }

  audi() {
    this.aud = !this.aud;
    this.form_.audi = !this.form_.audi;
  }

  mb() {
    this.mb_ = !this.mb_;
    this.form_.mb = !this.form_.mb;
  }

  mazda() {
    this.maz = !this.maz;
    this.form_.mazda = !this.form_.mazda;
  }

  airbag() {
    this.air = !this.air;
    this.form_.airbag = !this.form_.airbag;
  }

  engine() {
    this.eng = !this.eng;
    this.form_.engine = !this.form_.engine;
  }

  abs_() {
    this.abs = !this.abs;
    this.form_.abs = !this.form_.abs;
  }

  oil_() {
    this.oil = !this.oil;
    this.form_.oil = !this.form_.oil;
  }

}
