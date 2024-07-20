// ---- Шапка в корзине с фильтрами ----

    // p.cart-buttons__cost
    // 	  span.total-count 6  общее количество товаров
    // 	  span товаров на сумму:
    // 	  span.total-price 142 794 итоговая цена всех товаров
    // 	  span.currency ₽

  //чекбокс Выбрать все
    //  li.worth__item
    //    +checkbox('worth__all-items', 'checked', 'all-items', 'worth-label', 'Выбрать все')

    // html <input type="checkbox" name="worth__all-items" checked="checked" id="all-items">
    //      <label class="worth-label" for="all-items">Выбрать все</label>


// ------------ Превью товара -------------

  // Чекбокс
    //  li.selected-products__item
		//	  .selected-products__choose
    //       +checkbox('item', 'checked', 'item', 'product-label', '')
      // html <div class="selected-products__choose">
      //        <input type="checkbox" name="item" checked="checked" id="item">
      //        <label class="product-label" for="item"></label>
      //       </div>

  // Изображение товара
    // img.product-preview-img(src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719964800&semt=ais_user", width="102" height="63" style="background-color: blue; display: block")

  // Название товара
    // +link('selected-products__image-link', 'Zion Williamson x Air Jordan 1 Retro Low OG "Voodoo"', 'placing-order.html')

  // Кнопка -
    // +button('-', 'value-decrease buttons-value__button--decrease', 'button')
  
  // Кнопка +
    // +button('+', 'value-increase buttons-value__button--increase', 'button')


  // Размер товара
    // p.selected-products__item-size Размер:
    //   span.size-number 41

  // Цена и тип валюты
    //  dl.cart-price__wrapper
    //    dt.cart-price__cost-title Цена:
    //    dd.cart-price__cost-value 23 799
    //    span.currency ₽    *тип валюты

  // Превью заказа, список товаров
    //  ol.mini-order__list
		//		li.mini-order__item
    //      +link('selected-products__image-link', 'Zion Williamson x Air Jordan 1 Retro Low OG "Voodoo"', '#')   *Название товара
      //      dl.cart-price__wrapper
      //        dt.cart-price__cost-title Цена:
      //        dd.cart-price__cost-value 23 799
      //        span.currency ₽      *тип валюты