import {describe, beforeEach, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import HeaderMenu from '../src/components/HeaderMenu.vue'
import router from '../src/router.js'
import {setActivePinia, createPinia} from 'pinia'


describe('тестируем HeaderMenu.vue', () => {
    let wrapper
    beforeEach(() => {
        setActivePinia(createPinia())
        wrapper = mount(HeaderMenu, {  // монтируем компоненту для получения содержимого
            propsData: {}, // если есть пропсы, передаем их
            global: {plugins: [router]}  // исключаем тестирование сторонних бибилиотек// чтобы меньше сообщенгий в консоле
        });
    });


    it('Имеется ли кнопка Выход', () => {
        console.log(" wrapper.text() = ", wrapper.text()) // так можно посмотреть что внутри

        let button = wrapper.find('[class="exit"]')
        button.trigger('click'); // нажимается ли
        expect(button.exists()).toBeTruthy()
        expect(wrapper.text()).toContain('Выход')
    })


    it('Меняется ли состояние при нажатии кнопки сандвич (pinia)', () => {
        expect(wrapper.vm.activeButton).toBeFalsy()
        wrapper.vm.triggerMenu() // запуск метода
        expect(wrapper.vm.activeButton).toBeTruthy()

    })


    it('Другой способ тестирования кнопки Выход', async () => {
        // который вроде ничем лучше того, что предлагает vitest по умолчанию
        // render(HeaderMenu, {})
        // const button = await screen.findByText('Выход')
        // expect(button.nodeName).toBe('SPAN')
        //
        // await fireEvent.click(button)

        // работает на библиотеке// наверно достаточно первым способом
        // import {render, screen, fireEvent} from '@testing-library/vue'
        // "@testing-library/vue": "^7.0.0",
    })

    it('СНАПШОТ - позволяет заметить изменения внешнего вида', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
