<template>
  <div class="panel">
    <span class="mobile-switch-section" @click="activeLeftSection = !activeLeftSection">Ещё...</span>
    <div class="panel__section panel__left right-line " :class="{ panel__section_active: activeLeftSection }">

      <h2>Общая информация</h2>
      <div class="panel__block">
        <div class="row row--margin">
          <label class="panel__block__label" style="width: 200px;">Повод</label>
          <div class="panel__activity">
            <el-select class="panel__el" style="width: 540px;" v-model="value" placeholder="Повод">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-input class="panel__el" v-model="inp1" placeholder="Указать вручную"></el-input>
            <el-button class="panel__el" round>Опрос</el-button>
          </div>
        </div>
        <div class="row row--margin">
          <label class="panel__block__label" style="width: 200px;">Спецотметки</label>
          <div class="panel__activity">
            <el-input class="panel__el" v-model="inp1" placeholder="Добавьте спецотметку"></el-input>
          </div>
        </div>

      </div>
      <div class="row row--beatween">
        <h2>Место вызова</h2> <el-checkbox label="Только местные объекты" />
      </div>
      <div class="panel__block">
        <div class="area">
          <el-button v-for="c in callPlaces" :key="c.id" closeable round @click="deleteCallPlace(c.id)">{{ c.name
          }}</el-button>
          <el-input class="none-outlines italic" v-model="callPlaceText" placeholder="Введите адрес"
            @keyup.enter="addCallPlace()" />
        </div>
        <div class="row row--beatween mobile-not-row">
          <div class="panel__block__part" style="width: 50%;">
            <div class="row row--margin">
              <label class="panel__block__label" style="width: 250px;">Тип</label><el-select class="panel__call-place"></el-select>
            </div>
            <div class="row row--margin">
              <label class="panel__block__label" style="width: 250px;">Регион</label><el-select class="panel__call-place"></el-select>
            </div>
            <div class="row row--margin">
              <label class="panel__block__label" style="width: 250px;">МО</label><el-select class="panel__call-place"></el-select>
            </div>
            <div class="row row--margin">
              <label class="panel__block__label" style="width: 250px;">НП</label><el-select class="panel__call-place"></el-select>
            </div>
          </div>

          <div class="panel__block__part" style="width: 46%;">
            <div class="row row--margin">
              <label class="panel__block__label" style="width: 130px;">Объект</label><el-select class="panel__call-place"></el-select>
            </div>
            <div class="row row--margin">
              <label class="panel__block__label" style="width: 130px;">Улица</label><el-select class="panel__call-place"></el-select>
            </div>
            <div class="row row--not-align  row--margin">
              <label class="panel__block__label"  style="width: 312px; margin-top:5px;">Подробно</label>
              <div>
                <span class="row">
                  <el-input v-model="inp2" class="detail__num" placeholder="Дом"></el-input>
                  <el-input v-model="inp2" class="detail__num" placeholder="Корп"></el-input>
                  <el-input v-model="inp2" class="detail__num" placeholder="Стр"></el-input>
                  <el-input v-model="inp2" class="detail__num" placeholder="Кв"></el-input>
                </span>
                <span class="row">
                  <el-input v-model="inp2" class="detail__num" placeholder="Подъезд"></el-input>
                  <el-input v-model="inp2" class="detail__num" placeholder="Этаж"></el-input>
                  <el-input v-model="inp2" class="detail__num" placeholder="Домофон"></el-input>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <h2>Сведения о больном</h2>
    </div>
    <div class="panel__section panel__right" :class="{ panel__section_active: !activeLeftSection }">

      <h2>Информация об обслуживании </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi sed vero ipsum perspiciatis, excepturi
        nesciunt unde? Natus eligendi hic culpa mollitia eaque, officia, ipsam consequatur tempore aut, vel inventore!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi sed vero ipsum perspiciatis, excepturi
        nesciunt unde? Natus eligendi hic culpa mollitia eaque, officia, ipsam consequatur tempore aut, vel inventore!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi sed vero ipsum perspiciatis, excepturi
        nesciunt unde? Natus eligendi hic culpa mollitia eaque, officia, ipsam consequatur tempore aut, vel inventore!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi sed vero ipsum perspiciatis, excepturi
        nesciunt unde? Natus eligendi hic culpa mollitia eaque, officia, ipsam consequatur tempore aut, vel inventore!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi sed vero ipsum perspiciatis, excepturi
        nesciunt unde? Natus eligendi hic culpa mollitia eaque, officia, ipsam consequatur tempore aut, vel inventore!</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoPanel',
  data() {
    return {
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        }],
      callPlaces: [
        { id: 1, name: "Чувашия" },
        { id: 2, name: "Чебоксары" }
      ],
      callPlaceText: '',
      value: '',
      inp1: '',
      inp2: '',
      activeLeftSection: true,
    }

  },
  methods: {
    deleteCallPlace(id) { this.callPlaces = this.callPlaces.filter(c => c.id !== id) },
    addCallPlace() {
      let callPlace = {
        id: Date.now(),
        name: this.callPlaceText,
      }
      this.callPlaces.push(callPlace);
      this.callPlaceText = '';
    },
    changeActiveSectionMobile() { activeLeftSection = !activeLeftSection }
  }
}
</script>
<style scoped>
.area {
  width: 100%;
  border: 1px solid #ddd;
  padding: 8px;
  margin: 5px 0px 20px 0px;
}

.panel {

  background: white;
  display: flex;
  position: relative;
}


.panel__section {
  padding: 26px 28px 10px 28px;
  position: relative;
}

.panel__left {
  width: 58%;
}

.panel__right {
  width: 42%;
}

.right-line {
  border-right: 1px solid #D8D9D9;
  height: 100%;
}

.panel__block {
  margin-bottom: 10px;
}

.panel__block label {
  font-size: 18px;
}

.panel__block__part {
  margin-right: 30px;
}

.panel__block__part:last-child {
  margin-right: 0px;
}

.panel__activity {
  display: flex;
  width: 100%;

}

.panel__block .row .detail__num {
  flex-grow: 0;
  margin-right: 10px;
  margin-bottom: 10px;
}

.panel__block .row .detail__num:last-child {
  margin-right: 0px;
}

.row--margin {
  margin: 5px 0px 11px 0px;
}

.panel__activity .el-button,
.panel__activity .el-select,
.panel__activity .el-input {
  margin-right: 8px;
}

.panel__activity .panel__el:last-child {
  margin-right: 0px;
}

.panel__activity .el-select {
  --el-font-size-base: 16px;
}

.el-input {
  --el-font-size-base: 19px;
}

.el-button[closeable] {
  margin-bottom: 12px;
}

.el-checkbox {
  margin-bottom: 7px;
}

.panel__call-place.el-select {
  width: 100%;
}

.mobile-switch-section {
  position: absolute;
  right: 5px;
  padding: 15px;
  z-index: 2;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  display: none;
}



@media screen and (max-width: 900px) {
  .mobile-switch-section{
    display: block;
  }
  .panel__block label {
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-width: 52px;
  }

  .panel__activity {
    display: flex;
    width: 90%;
  }

  .panel__section {
    padding: 16px 10px 10px 10px;
  }

  .mobile-not-row {
    flex-direction: column;
  }

  .panel__block__part {
    margin-right: 0px;
    width: 100% !important;
  }

  .panel__right,
  .panel__left {
    transition: 1s;
    position: absolute;
  }

  .panel__left {
    right: 100%;
    width: 100%;


  }

  .panel__right {
    left: 100%;
    width: 100%;
  }

  .panel__section_active {

    left: auto;
    right: auto;
    position: relative;
    padding: 15px;

  }
  .panel__right.panel__section_active{
    animation-duration: .4s;
    animation-name: slideinRight;
  }
  .panel__left.panel__section_active{
    animation-duration: .4s;
    animation-name: slideinLeft;
  }
  .right-line{
    border-right: none;
  }
  .panel__block__label{
    width:200px !important;
  }

  
}
@media screen and (max-width: 576px) {
  .panel__activity{
    width:80%;
  }
}


@keyframes slideinLeft {
  from {
    right: 100%;
  }

  to {
    right: 0%;
    position: relative;
  }
}

@keyframes slideinRight {
  from {
    left: 100%;
  }

  to {
    left: 0%;
    position: relative;
  }
}

</style>
