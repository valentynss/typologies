// Єдине місце, яке треба редагувати, щоб розширювати карту.
// Вузол: { name, note, architect, project, year, src:[[підпис,url]], status, children:[...] }
// status: "ok" — є авторське визначення в джерелі; "check" — потребує перевірки; без статусу — категорія.
const DATA = {
  name: "Методи формотворення (mass studies)",
  note: "Типологія методів пошуку зовнішньої форми та внутрішнього простору будівлі на ранній стадії проєктування. 2000–2020, світові бюро.",
  children: [
    {
      name: "За принципом створення форми",
      children: [
        { name: "Методичні", children: [
          { name: "Stack (стос)", status: "ok", architect: "MVRDV", project: "Dutch Pavilion, Expo 2000; Silodam", year: "2000",
            note: "Програма розміщується блоками один на одному. Ідея з'явилася раніше, у Metacity/Datatown (1998), тож твердження «вперше у 2000» треба уточнити. Бюро зазначає: щільність неможлива без стосування.",
            src: [["MVRDV: Architecture Speaks","https://mvrdv.com/stack-magazine/2565/architecture-speaks-the-language-of-mvrdv"],["Огляд MVRDV","https://sfkb.at/books/mvrdv"]] },
          { name: "Зигзаг і петля", status: "check", architect: "NL Architects", project: "Loop de Loop", year: "2004", note: "З вашого документа. Авторське визначення ще не знайдено." }
        ]},
        { name: "Гібридні", children: [
          { name: "Courtscraper", status: "ok", architect: "BIG / Bjarke Ingels", project: "VIA 57 West, Нью-Йорк", year: "2016",
            note: "Гібрид європейського дворового кварталу й манхеттенського хмарочоса. BIG називає це новою типологією. Попередники: 8 House, Mountain, VM.",
            src: [["MCHAP: VIA at West 57th","https://www.mchap.co/mchap-2016-projects/via-at-west-57th"]] },
          { name: "Проективна / параметрична", status: "check", note: "Категорія з вашого тексту. Потрібні авторські приклади." }
        ]},
        { name: "Дієві (операції)", children: [
          { name: "Twist / Möbius loop", status: "ok", architect: "UNStudio / Ben van Berkel", project: "Möbius House; Mercedes-Benz Museum", year: "1998",
            note: "Будинок виріс зі схеми стрічки Мебіуса з чотирьох квадрантів. Ту саму матрицю розвинено в маршрут музею Mercedes-Benz.",
            src: [["AD Classics: Möbius House","https://architecturelab.net/ad-classics-mobius-house-unstudio"]] },
          { name: "Void (порожнина)", status: "ok", architect: "OMA / Rem Koolhaas", project: "Très Grande Bibliothèque", year: "1989",
            note: "Розподіл на щільне сховище книг і публічні порожнини.",
            src: [["Socks: Strategy of the void","https://socks-studio.com/2012/05/20/strategy-of-the-void-building-the-model-of-omas-tres-grande-bibliotheque/"]] },
          { name: "Додавання / віднімання / поділ", status: "check", note: "Категорія з вашого тексту." }
        ]},
        { name: "Комбіновані (взаємодія об'ємів)", children: [
          { name: "Коменсалізм", status: "check", note: "Нова організація слідує існуючій." },
          { name: "Мутуалізм", status: "check", note: "Доповнення покращує існуючу організацію, але не змінює її." },
          { name: "Паразитизм", status: "check", architect: "Herzog & de Meuron", project: "Elbphilharmonie", note: "Доповнення створює нову організацію й структуру. Приклад потребує авторського підтвердження." }
        ]},
        { name: "Теоретичні", children: [
          { name: "Sponge / Porosity (губка)", status: "ok", architect: "Steven Holl", project: "Simmons Hall, MIT", year: "2002",
            note: "Пористість як концепція «губки». Авторство Кена Єна з вашого тексту (джерело: ChatGPT) варто замінити на Холла.",
            src: [["Steven Holl Architects","https://www.stevenholl.com/project/mit-simmons-hall/"]] },
          { name: "Блоб", status: "check" },
          { name: "Складка", status: "check" }
        ]}
      ]
    },
    {
      name: "За характером форми",
      children: [
        { name: "Абстрактні", children: [
          { name: "Pixel", status: "ok", architect: "MVRDV", note: "Один із чотирьох методів «мови MVRDV». Конкретний проєкт у джерелі не названо.",
            src: [["MVRDV: Architecture Speaks","https://mvrdv.com/stack-magazine/2565/architecture-speaks-the-language-of-mvrdv"]] },
          { name: "Пальці", status: "check" }, { name: "Циклопи", status: "check" }
        ]},
        { name: "Природні", children: [
          { name: "Carpet (будівля-ландшафт)", status: "ok", architect: "Snøhetta", project: "Norwegian National Opera & Ballet, Осло", year: "2008",
            note: "Концепція з трьох елементів: хвильова стіна, «фабрика», «килим» (доступний дах).",
            src: [["World-Architects: Oslo Opera","https://world-architects.com/en/projects/view/oslo-opera"]] },
          { name: "Between nature and architecture", status: "ok", architect: "Sou Fujimoto", project: "Serpentine Pavilion; House N; House NA", year: "2013",
            note: "Проміжні простори між природою й архітектурою, «первісне майбутнє». House N — «коробка в коробці в коробці».",
            src: [["Architectural League: Current Work","https://archleague.org/article/sou-fujimoto-current-work/"]] }
        ]},
        { name: "Функціональні", children: [
          { name: "Аудиторії", status: "check" }, { name: "Консолі", status: "check" }
        ]}
      ]
    },
    {
      name: "Організація програми",
      children: [
        { name: "Spatial compartments", status: "ok", architect: "OMA / LMN", project: "Seattle Central Library", year: "2004",
          note: "Програму згруповано за схожістю в «просторові відсіки» замість окремих поверхів.",
          src: [["Domus","https://domusweb.it/en/architecture/2004/06/03/seattle-central-library-oma.html"]] },
        { name: "Village", status: "ok", architect: "MVRDV", project: "The Vertical Village (з The Why Factory)", year: "2012",
          src: [["aut: Language of MVRDV","https://aut.cc/en/exhibitions/the-language-of-mvrdv"]] },
        { name: "Activator", status: "ok", architect: "MVRDV", note: "Четвертий метод «мови MVRDV».",
          src: [["aut: Language of MVRDV","https://aut.cc/en/exhibitions/the-language-of-mvrdv"]] }
      ]
    }
  ]
};
