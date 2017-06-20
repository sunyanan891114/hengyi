import React from 'react';

export default () => {
  return (
      <aside id="tertiary" className="widget-area widget-footer" role="complementary">
        <div className="widget-footer-area widget-footer-top-area column-1">
          <div className="widget-area-wrapper">
            <section id="text-1" className="widget widget_text"><h2 className="widget-title">公司展望</h2>
              <div className="textwidget"><p>我们认为：民营企业作为国家经济构成的一部分，同样承载着承前启后、继往开来发展民族工业的重任。公司现已走过了技术研发、创业过程，我们正以饱满的热情、极具挑战的姿态去推动液力传动技术的发展及其产业化、规模化进程。我们深信：公司持续发展是永恒的主题，本着“用户在我心中，质量在我手中”宗旨，公司一定会在业内竞争中脱颖而出，成为最具核心竞争力的一流公司。
              </p>
              </div>
            </section>
          </div>
        </div>

        <div className="widget-footer-area widget-footer-bottom-area column-3">
          <div className="widget-area-wrapper">
            <section id="text-2" className="widget widget-small widget_text"><h2 className="widget-title">文本小组件</h2>
              <div className="textwidget"><p>这是文本小组件，可让您向边栏添加文本或 HTML。您可以使用此类小组件显示文本、链接、图片、HTML 或这些内容的组合，还可以在<a
                  href="https://wordpress.com/customize/">定制器</a>的“小组件”部分编辑这些内容。</p>
              </div>
            </section>
            <section id="recent-posts-1" className="widget widget-small widget_recent_entries"><h2
                className="widget-title">最新日志</h2>
              <ul>
                <li>
                  <a href="https://dalianhengyi.wordpress.com/2017/06/14/%e7%ac%ac%e4%b8%80%e7%af%87%e5%8d%9a%e6%96%87/">第一篇博文</a>
                </li>
              </ul>
            </section>
            <section id="search-1" className="widget widget-small widget_search"><h2 className="widget-title">搜索</h2>
              <form role="search" method="get" className="search-form"
                    action="https://dalianhengyi.wordpress.com/">
                <label>
                  <span className="screen-reader-text">搜索：</span>
                  <input type="search" className="search-field" placeholder="搜索&hellip;" value="" name="s"
                         title="搜索："/>
                </label>
                <button type="submit" className="search-submit"><span className="screen-reader-text">搜索</span>
                </button>
              </form>
            </section>
          </div>
        </div>
      </aside>
  )
}