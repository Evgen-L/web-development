<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../../web/css/style.css" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet">
  <title>CSS Grid</title>
</head>

<body>
  <div class="wrapper">
    <div id="div_ContentAll">
      <div id="header">
        <div class="buttons">
          <div class="button_1">
            <table style="width: 100%; height: 50px;">
              <tr>
                <td style="width: 32px; padding-top: 8px;
                                       text-align: right;">
                  <img src="../../web/images/about_me_icon.png" alt="button_1" />
                </td>
                <td class="text">
                  <span>&nbsp;Обо мне</span>
                </td>
              </tr>
            </table>
          </div>

          <div class="button_2">
            <table style="width: 100%; height: 50px;">
              <tr>
                <td style="width: 34px; padding-top: 8px;
                                       text-align: right;">
                  <img src="../../web/images/hobby_icon.png" alt="button_2" />
                </td>
                <td class="text">
                  <span>&nbsp;Мое хобби</span>
                </td>
              </tr>
            </table>
          </div>
          <div class="button_3">
            <table style="width: 100%; height: 50px;">
              <tr>
                <td style="width: 33px; padding-top: 6px;
                                           text-align: right;">
                  <img src="../../web/images/video_icon.png" alt="button_2" />
                </td>
                <td class="text">
                  <span>&nbsp;Любимые фильмы</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="water">
    </div>
    <div id="div_ContentAll">
      <div class="conteiner_1">
        <div class="photo_plus_quote">
          <img class="photo_object" alt="Evgen" src="../../web/images/evgen.jpg" width=330 height=350 />
          <p class="quoted_text">
            Мы берем на себя много, потому что мало чего боимся
          </p>
          <p class="greg">
            — Том Демарко. Deadline
          </p>
        </div>
        <div class="hobbies">
          <h1 class="blue_subtitle1">
            Любимые фильмы:
          </h1>
          <ul class="dotted_list1">
            <li>Аватар</li>
            <li>Джокер</li>
            <li>Мстители</li>
            <li>Темный рыцарь</li>
          </ul>
          <h1 class="blue_subtitle2">
            Любимая музыка:
          </h1>
          <ol class="dotted_list2">
            <li>Рок</li>
            <li>Deep House</li>
            <li>Progressive House</li>
            <li>Джаз-фанк</li>
          </ol>
        </div>
        <div class="main_text">
          <h1 class="my_name">
            Zhenya Liakishev
          </h1>
          <div class="blue_block">
          </div>
          <p class="biography">
            В 1930-е годы прошлого века физик Джордж Гамоу из университета штата Колорадо начал публиковать<br /> мини-сериал рассказов о неком мистере Томпкинсе,<br /> банковском клерке средних лет. Мистер Томпкинс, как<br /> явствовало из этих историй, интересовался современной<br /> наукой.
          </p>
          <h2 class="my_hobbie">
            Мое хобби
          </h2>
          <p class="text_about_my_hobbie">
            Он регулярно посещал вечерние лекции местного профессора<br /> и, разумеется, всегда засыпал на самом интересном месте.<br />
            А когда просыпался, то обнаруживал себя в каком-нибудь<br /> параллельном мире, где один из основных законов физики<br /> действовал не так, как в его мире.
          </p>
          <a class="link" href="https://vk.com/id139908036">
            <span>Напиши мне</span> →
          </a>
        </div>
      </div>
      <div class="block_with_films" style=" text-align: center'">
        <p class="now_about_films">
          Любимые фильмы
        </p>
        <div class="conteiner_2">
          <div class="one_movie">
            <img src="../../web/images/morgan_frimen.png" alt="morgan" class="films" />
            <h1>Побег из Шоушенка</h1>
            <p class="text_under_films">
              Успешный банкир Энди Дюфрейн обвинен в убийстве собственной жены и ее любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решетки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, вооруженный живым умом и доброй душой, отказывается мириться с приговором судьбы и начинает разрабатывать невероятно дерзкий план своего освобождения.
            </p>
          </div>
          <div class="one_movie">
            <img src="../../web/images/they_are_happy.png" alt="happy" class="films" />
            <h1>Наркоз</h1>
            <p class="text_under_films">
              Клай Бересфорд вынужден лечь под нож. Однако в процессе операции на сердце он неожиданно приходит в себя. Находясь в парализованном состоянии, будучи не в силах пошевелить ни рукой, ни ногой, он, тем не менее, чувствует каждое касание скальпеля к своей плоти…
            </p>
          </div>
          <div class="one_movie">
            <img src="../../web/images/call_to_the_director.png" alt="director" class="films" />
            <h1 class="astral">Астрал</h1>
            <p class="text_under_films">
              Джош и Рене переезжают со своими детьми в новый дом, но не успевают толком распаковать вещи, как начинаются странные события. Необъяснимо перемещаются предметы, в детской звучат странные звуки… Но в настоящий ужас приходят родители, когда их десятилетний сын Далтон впадает в кому. Все усилия врачей в больнице помочь мальчику безуспешны.
            </p>
          </div>
          <div class="one_movie">
            <img src="../../web/images/the_umbilicial_cord_comes_off.png" alt="cord" class="films" />
            <h1>Гравитация</h1>
            <p class="text_under_films">
              Доктор Райан Стоун, блестящий специалист в области медицинского инжиниринга, отправляется в свою первую космическую миссию под командованием ветерана астронавтики Мэтта Ковальски, для которого этот полет — последний перед отставкой. Но во время, казалось бы, рутинной работы за бортом случается катастрофа.<br />Шаттл уничтожен, а Стоун и Ковальски остаются совершенно одни; они находятся в связке друг с другом, и все, что они могут, — это двигаться по орбите в абсолютно черном пространстве без всякой связи с Землей и какой-либо надежды на спасение.
            </p>
          </div>
        </div>
      </div>
      <div class="button_all">
        <p class="text_for_button_all">Все фильмы</p>
      </div>
    </div>
    <div class="forma">
      <h2 class="write_me">НАПИШИ МНЕ</h2>
      <form action="../../web/index.php" method="POST" class="forma_about_you">
        <label class="label">Ваше имя<span class="star"> *</span></label>
        <input class="one_field" type="text" name="name" />
        <label class="label">Ваш email<span class="star"> *</span></label>
        <input class="one_field" type="text" name="email" />
        <label class="label">Откуда вы?</label>
        <select class="select_box" name="country">
          <option>Россия</option>
          <option>США</option>
          <option>Германия</option>
          <option>Франция</option>
        </select>
        <label class="label">Ваш пол</label>
        <div class="select_gender">
          <input id="male" class="radio_button" type="radio" name="gender" checked />
          <label for="male" class="gender">Мужской</label>
          <input id="female" class="radio_button" type="radio" name="gender" />
          <label for="female" class="gender">Женский</label>
        </div>
        <label class="label">Ваше сообщение<span class="star"> *</span></label>
        <textarea class="message" name="message"></textarea>
        <input type="submit" class="send" value="Отправить" />
        <?php if (array_key_exists('success', $args)): ?>
            <span>Сообщение успешно отправлено</span>
        <?php endif; ?>    
      </form>
    </div>
    <footer>
      <p>
        © 2006-2018 Поволжский государственный технологический университет, ФГБОУ ВО «ПГТУ»
      </p>
    </footer>
  </div>
</body></html>
