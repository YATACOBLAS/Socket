<template>
<div>
  <h1>PDF</h1>
  <button @click="generarPDF" >GENERAR PDF</button>

  <!-- Modal -->
  <!-- <a ref="modal_pdf" href="" data-mdb-toggle="modal" data-mdb-target="#PDFModal"  class="text-primary"> 
                      Registrarse </a>
                  

<div
  class="modal fade"
  id="PDFModal"
  tabindex="-1"
  aria-labelledby="PDFModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
        <iframe :src="this.ruta" frameborder="0"  width="auto"
            height="600px">

        </iframe>
    </div>
    </div>
    </div> -->
</div>
</template>
<script>
import JSPDF from 'jspdf'
export default {
    name:'PDF',
    data() {
        return {
            ruta:''      
        }
    },
    methods: {
        generarPDF(){
            this.ruta='';
            const doc= new JSPDF();
                        
            doc.ellipse(60, 20, 10, 5)

            doc.setFillColor(0, 0, 255)
            doc.ellipse(10, 5, 10, 5, 'F')

            doc.setLineWidth(1)
            doc.setDrawColor(0)
            doc.setFillColor(255, 0, 0)
            doc.circle(120, 20, 5, 'FD')
         //doc.save('test.pdf');
          this.ruta=doc.output('datauri');

          console.log(this.ruta);
          this.ruta='/'+this.ruta.substring(this.ruta.indexOf("base64,")+7);
          console.log(this.ruta)
        //   console.log(this.$route.query.page);
        //    this.$refs.modal_pdf.click()
           window.open(doc.output('bloburl'), '_blank');
 
        }
    },
}
</script>