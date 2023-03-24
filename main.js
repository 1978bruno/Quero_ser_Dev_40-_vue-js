

const app=Vue.createApp({
  data(){
    return{
      searchtext: '',
      /* firstname: 'Bruno',
      lastname: 'Rocha',
      email: 'brunorr@gmail.com',
      city: 'Montes Claros',
      picture: 'https://randomuser.me/api/portraits/men/7.jpg', */
      
//      listcontacts: ['Caio', 'Maria', 'Renata', 'João', 'Roberto']
      listcontacts: [
       /*  {
          firstname: 'Roberto',
          lastname: 'Castro',
          email: 'roberto@emaail.com',
          city: 'Indaiatuba',
          picture: 'https://randomuser.me/api/portraits/men/27.jpg'
        },
        {
          firstname: 'Renata',
          lastname: 'Silva',
          email: 'renata@email.com',
          city: 'Samambaia',
          picture: 'https://randomuser.me/api/portraits/women/17.jpg'
        },
        {
          firstname: 'Caio',
          lastname: 'Bretas',
          email: 'caio@emaail.com',
          city: 'Camanducaia',
          picture: 'https://randomuser.me/api/portraits/men/18.jpg'
        } */
      ]
    }
  },

  computed:{
    listresult(){
      if(this.searchtext){
        return this.listcontacts.filter(contact => {
          return contact.firstname.toLowerCase().includes(this.searchtext.toLowerCase())
        });
      }else{
        return this.listcontacts;
      }
    }
  },

  async mounted(){
    this.listresult = await this.getData();
  },

  methods:{
    changeData(){
      this.firstname = 'Mario'
      this.lastname = 'Ribeiro'
      this.email = 'mario@ribeiro.com'
      this.city = 'São Paulo'
      this.picture = 'https://randomuser.me/api/portraits/men/17.jpg'
    },
    removecontact(index){
//      console.log("Index do objeto selecionado: " + index);
      this.listcontacts.splice(index, 1);
    },
    async getData(){
      let response = await fetch('https://randomuser.me/api/?results=15');
//      console.log(response.json());

      this.listcontacts = []

      let data = await response.json();
//      console.log(data)
      data.results.forEach(item => {
        var contact = new Object();
        contact.picture   = item.picture.large
        contact.firstname = item.name.first;
        contact.lastname  = item.name.last;
        contact.email     = item.email;
        contact.city      = item.location.city;

//        console.log('-------------');
//        console.log(contact)
        this.listcontacts.push(contact);
      });
    }
  }

})
app.mount('#app');