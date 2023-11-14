<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
        <v-form>
          <!--<ValidationObserver ref="formObserver">-->
            <v-card class="mx-auto">
              <v-card-text>
                <p class="text-h4 text--primary">
                  Nuevo Proveedor
                </p>
                <div>Datos Generales</div>
                <v-divider></v-divider>
                <div class="text--primary">
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="RFC"
                        rules="min:10|required|max:13|base"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="RFC"
                          outlined
                          dense
                          color="inigo"
                          clearable
                          v-model="ProveedorObj.rfc"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>

                    
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <ValidationProvider
                        name="Razón Social"
                        rules="min:3|required|base"
                        v-slot="{ errors }"
                    >
                      <v-text-field
                        label="Razón Social"
                        outlined
                        dense
                        color="inigo"
                        clearable
                        v-model="ProveedorObj.rznSocial"
                        :error-messages="errors"
                      ></v-text-field>
                      </ValidationProvider>
                    </div>
                  

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                      name="Contacto"
                        rules="num|min:10|required"
                        v-slot="{ errors }"
                      >
                      <v-text-field
                        label="Contacto"
                        v-model="ProveedorObj.contacto"
                        outlined
                        dense
                        color="inigo"
                        clearable
                        :error-messages="errors"
                      ></v-text-field>
                    </ValidationProvider>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                      name="Estado"
                      rules="required"
                      v-slot="{errors}">
                      <v-select
                        :items="NombreEstados"
                        label="Estado"
                        dense
                        outlined
                        v-model="ProveedorObj.estado"
                        item-text="estado"
                        item-value="id"
                        :error-messages="errors"
                      ></v-select>
                    </ValidationProvider>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                      name="Teléfono Principal"
                      rules="required|min:10|num|max:15"
                      v-slot="{errors}">
                      <v-text-field
                        label="Teléfono Principal"
                        v-model="ProveedorObj.telP"
                        outlined
                        dense
                        color="inigo"
                        clearable
                        :error-messages="errors"
                      ></v-text-field>
                    </ValidationProvider>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                      name ="Teléfono Movil"
                      rules="required|min:10|num|max:15"
                      v-slot="{errors}"
                      >

                      <v-text-field
                        label="Teléfono Movil"
                        v-model="ProveedorObj.telS"
                        outlined
                        dense
                        color="inigo"
                        clearable
                        :error-messages="errors"
                      ></v-text-field>
                    </ValidationProvider>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                      name = "Email"
                      rules = "required|max:100"
                      v-slot="{errors}"
                      >
                      <v-text-field
                        label="Email"
                        v-model="ProveedorObj.email"
                        outlined
                        dense
                        color="inigo"
                        clearable
                        :error-messages="errors"
                      ></v-text-field>
                    </ValidationProvider>
                    </div>
                  </div>
                </div>

                <v-subheader>Dirección</v-subheader>

                <div class="row">
                  <div class="text--primary">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <ValidationProvider
                        name="Código Postal"
                        rules="required|max:5|min:5"
                        v-slot="{errors}">
                        
                        <v-text-field
                          label="Código Postal"
                          v-model="ProveedorObj.cp"
                          outlined
                          dense
                          color="inigo"
                          clearable
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                      </div>

                      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <ValidationProvider
                        name="Numero Interior"
                        rules="required|min:1|max:6|base"
                        v-slot="{errors}"
                        >
                        <v-text-field
                          label="Número Interior"
                          v-model="ProveedorObj.noInterior"
                          outlined
                          dense
                          color="inigo"
                          clearable
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                      </div>

                      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <ValidationProvider
                        name="Numero Exterior"
                        rules="required|base"
                        v-slot="{errors}"
                        >
                        <v-text-field
                          label="Número Exterior"
                          v-model="ProveedorObj.noExterior"
                          outlined
                          dense
                          color="inigo"
                          clearable
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                      </div>

                      <div class="col-xs-0 col-sm-0 col-md-3 col-lg-3"></div>

                      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <ValidationProvider name="Calle" rules="required|base|max:256" v-slot="{ errors }" >
                        <v-text-field
                          label="Calle"
                          v-model="ProveedorObj.calle"
                          outlined
                          dense
                          color="inigo"
                          clearable
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                      </div>

                      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <ValidationProvider
                        name="Colonia"
                        rules="required|base|min:3|max:99"
                        v-slot="{errors}"
                        >
                        <v-text-field
                          label="Colonia"
                          v-model="ProveedorObj.colonia"
                          outlined
                          dense
                          color="inigo"
                          clearable
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                      </div>

                      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <ValidationProvider
                        name="Entidad"
                        rules="required"
                        v-slot="{errors}"
                        >
                        <v-select
                          :items="entidadNombres"
                          label="Entidad"
                          dense
                          outlined
                          item-text="entidad"
                          item-value="id"
                          v-model="ProveedorObj.entidad" 
                          :error-messages="errors"
                        ></v-select>
                      </ValidationProvider>
                      </div>

                      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <ValidationProvider
                        name="Municipio"
                        rules="required"
                        v-slot="{errors}"
                        >
                        <v-select
                          :items="Municipios"
                          label="Municipios"
                          dense
                          outlined
                          item-text="municipio"
                          item-value="id"
                          v-model="ProveedorObj.municipio"
                          :error-messages="errors"
                        ></v-select>
                      </ValidationProvider>
                      </div>
                    </div>
                  </div>
                </div>
                <v-card-actions>
                  <v-btn
                    text
                    color="deep-purple accent-4"
                    @click="validateForm"
                  >
                    <i class="fa-solid fa-floppy-disk"></i>
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          <!-- </ValidationObserver> -->
        </v-form>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="mb-1">
                Detalle del proveedor
              </div>
              <v-list-item-title class="text-h6 mb-1">
                Datos Capturados
              </v-list-item-title>
              <p>RFC: {{ ProveedorObj.rfc }}</p>
              <p>Razón Social: {{ ProveedorObj.rznSocial }}</p>
              <p>Estado: {{ NombreEstados.estado }}</p>
              <p>Entidad: {{ ProveedorObj.entidad }}</p>
              <p>municipio: {{  ProveedorObj.municipio }}</p>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text>
              Button
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { required, max, min } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import axios from "axios";

const API_URL = "http://localhost:5038/api/";

extend("max", {
  ...max,
  message: "El campo {_field_} no debe tener mas de {length} caracteres",
});
extend("min", {
  ...min,
  message: "El campo {_field_} debe tener por lo menos {length} caracteres",
});
extend("required", {
  ...required,
  message: "El campo {_field_} es obligatorio",
});
extend("base", {
  validate: (value) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(value);
  },
  message: "Este Campo solo debe contener números y letras",
});
extend("acentos", {
  validate: (value) => {
    const regex = /^[ñ\s]+$/;
    return regex.test(value);
  },
});

extend("num", {
  validate: (value) => {
    const regex = /^[0-9]+$/;
    return regex.test(value);
  },
  message: "El campo {_field_} solo admite números"
})

export default {
  name: "RegistrarProveedoresComponent",

  data() {
    return {
      ProveedorObj: {
        rfc: "",
        rznSocial: "",
        contacto: "",
        estado: "",
        telP: "",
        telS: "",
        email: "",
        cp: "",
        noInterior: "",
        noExterior: "",
        calle: "",
        colonia: "",
        entidad: "",
        municipio: "",
      },

      Municipios: [],
      entidadNombres: [],
      NombreEstados:[],
      NombreMunicipios: [],
    };
  },
  components: {
    ValidationProvider
  },
  methods: {
    validateForm() {
  //this.$refs.formObserver.validateAll(); 
  console.log(this.ProveedorObj);
  this.RegistrarProveedor();
},
    async refreshData() {
      try {
        const response = await axios.get(`${API_URL}EntidadesMunicipios/Entidades`);
        const resultado = []
        for (const item in response.data) {
          resultado.push({id: response.data[item]._id, entidad: response.data[item].nombre});
        }
        this.entidadNombres = resultado
      } catch (error) {
        console.error("Error al obtener las Entidades:", error);
      }

      try {
        const response = await axios.get(`${API_URL}EstadoProveedores`);
        const resultado = []
        for (const item in response.data){
          resultado.push({id: response.data[item]._id, estado: response.data[item].estado});
        }
        this.NombreEstados = resultado
      }catch (error) {
        console.error("Error al obtener las Estados:", error);
      }
      try {
        const response = await axios.get(`${API_URL}EntidadesMunicipios/Municipios`);
        const resultado = []
        for (const item in response.data){
          resultado.push({id: response.data[item]._id, municipio: response.data[item].nombre, estadoID: response.data[item].estadoId})
        }
        this.NombreMunicipios = resultado
      }catch (error) {
        console.error("Error al obtener las Estados:", error);
      }
    },
    RegistrarProveedor(){
      
        axios
          .post(`${API_URL}RegistrarProveedor`,this.ProveedorObj)
          .then(() => {
            this.refreshData();
            this.ProveedorObj={}
          })
          .catch((error) => {
            console.error("Error al agregar nota:", error);
          });
      
    }
  },
  created() {
    this.refreshData();
  },

  watch: {
  'ProveedorObj.entidad': function(newEntidadId, oldEntidadId) {
    if (newEntidadId !== oldEntidadId) {

      this.Municipios = this.NombreMunicipios.filter(municipio => municipio.estadoID === newEntidadId);
    }
  }
}

};
</script>
