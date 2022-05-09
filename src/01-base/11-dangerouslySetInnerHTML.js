/*
 * @Author: whj0117
 * @Date: 2022-05-09 21:42:12
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text: `<div class="panel">
        <div class="panel-header">
          <span class="panel-more">
            <a href="/films?showType=1" class="textcolor_red" data-act="all-playingMovie-click">
              <span>全部</span>
            </a>
            <span class="panel-arrow panel-arrow-red"></span>
          </span>
          <span class="panel-title">
            <span class="textcolor_red"><h2>正在热映（29部）</h2></span>
          </span>
        </div>
        <div class="panel-content">
                <dl class="movie-list">
      <dd>
        <div class="movie-item">
          <a href="/films/1298265" target="_blank" data-act="playingMovie-click" data-val="{movieid:1298265}">
            <div class="movie-poster">
              <img class="movie-poster-img" alt="坏蛋联盟电影海报" src="https://p0.pipi.cn/mmdb/25bfd69a030c7eaf330e13fb0b08a6695f6f7.jpg?imageView2/1/w/160/h/220">
              <div class="movie-overlay movie-overlay-bg">
                <div class="movie-info">
                  <div class="movie-score"><i class="integer">9.</i><i class="fraction">1</i></div>
                  <div class="movie-title movie-title-padding" title="坏蛋联盟">坏蛋联盟</div>
                </div>
              </div>
            </div>
          </a>
    <div class="movie-detail movie-detail-strong movie-sale">
      <a href="/cinemas?movieId=1298265" class="active" target="_blank" data-act="salePlayingMovie-click" data-val="{movieid:1298265}">购 票</a>
    </div>
          <div class="movie-ver"><i class="m3d"></i></div>
        </div>
      
      </dd><dd>
        <div class="movie-item">
          <a href="/films/1328765" target="_blank" data-act="playingMovie-click" data-val="{movieid:1328765}">
            <div class="movie-poster">
              <img class="movie-poster-img" alt="我是真的讨厌异地恋电影海报" src="https://p0.pipi.cn/mmdb/25bfd69ae7a5bff0ee230fed0210646bfdde9.jpg?imageView2/1/w/160/h/220">
              <div class="movie-overlay movie-overlay-bg">
                <div class="movie-info">
                  <div class="movie-score"><i class="integer">8.</i><i class="fraction">2</i></div>
                  <div class="movie-title movie-title-padding" title="我是真的讨厌异地恋">我是真的讨厌异地恋</div>
                </div>
              </div>
            </div>
          </a>
    <div class="movie-detail movie-detail-strong movie-sale">
      <a href="/cinemas?movieId=1328765" class="active" target="_blank" data-act="salePlayingMovie-click" data-val="{movieid:1328765}">购 票</a>
    </div>
          <div class="movie-ver"></div>
        </div>
      
      </dd><dd>
        <div class="movie-item">
          <a href="/films/338380" target="_blank" data-act="playingMovie-click" data-val="{movieid:338380}">
            <div class="movie-poster">
              <img class="movie-poster-img" alt="神秘海域电影海报" src="https://p0.pipi.cn/mmdb/25bfd69ad7c3385bf180779c8ca665bf97ce5.jpg?imageView2/1/w/160/h/220">
              <div class="movie-overlay movie-overlay-bg">
                <div class="movie-info">
                  <div class="movie-score"><i class="integer">8.</i><i class="fraction">5</i></div>
                  <div class="movie-title movie-title-padding" title="神秘海域">神秘海域</div>
                </div>
              </div>
            </div>
          </a>
    <div class="movie-detail movie-detail-strong movie-sale">
      <a href="/cinemas?movieId=338380" class="active" target="_blank" data-act="salePlayingMovie-click" data-val="{movieid:338380}">购 票</a>
    </div>
          <div class="movie-ver"><i class="imax2d"></i></div>
        </div>
      
      </dd><dd>
        <div class="movie-item">
          <a href="/films/522013" target="_blank" data-act="playingMovie-click" data-val="{movieid:522013}">
            <div class="movie-poster">
              <img class="movie-poster-img" alt="神奇动物:邓布利多之谜电影海报" src="https://p0.pipi.cn/mmdb/25bfd602d7c807d7c3cbae3e4517bbee2a46d.jpg?imageView2/1/w/160/h/220">
              <div class="movie-overlay movie-overlay-bg">
                <div class="movie-info">
                  <div class="movie-score"><i class="integer">7.</i><i class="fraction">9</i></div>
                  <div class="movie-title movie-title-padding" title="神奇动物:邓布利多之谜">神奇动物:邓布利多之谜</div>
                </div>
              </div>
            </div>
          </a>
    <div class="movie-detail movie-detail-strong movie-sale">
      <a href="/cinemas?movieId=522013" class="active" target="_blank" data-act="salePlayingMovie-click" data-val="{movieid:522013}">购 票</a>
    </div>
          <div class="movie-ver"><i class="imax2d"></i></div>
        </div>
      
      </dd><dd>
        <div class="movie-item">
          <a href="/films/1298049" target="_blank" data-act="playingMovie-click" data-val="{movieid:1298049}">
            <div class="movie-poster">
              <img class="movie-poster-img" alt="密室逃生2电影海报" src="https://p0.pipi.cn/mmdb/25bfd69a030338ddd2300b1f3b191305438ba.jpg?imageView2/1/w/160/h/220">
              <div class="movie-overlay movie-overlay-bg">
                <div class="movie-info">
                  <div class="movie-score"><i class="integer">8.</i><i class="fraction">4</i></div>
                  <div class="movie-title movie-title-padding" title="密室逃生2">密室逃生2</div>
                </div>
              </div>
            </div>
          </a>
    <div class="movie-detail movie-detail-strong movie-sale">
      <a href="/cinemas?movieId=1298049" class="active" target="_blank" data-act="salePlayingMovie-click" data-val="{movieid:1298049}">购 票</a>
    </div>
          <div class="movie-ver"></div>
        </div>
      
      </dd><dd>
        <div class="movie-item">
          <a href="/films/1048263" target="_blank" data-act="playingMovie-click" data-val="{movieid:1048263}">
            <div class="movie-poster">
              <img class="movie-poster-img" alt="月球陨落电影海报" src="https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220">
              <div class="movie-overlay movie-overlay-bg">
                <div class="movie-info">
                  <div class="movie-score"><i class="integer">8.</i><i class="fraction">2</i></div>
                  <div class="movie-title movie-title-padding" title="月球陨落">月球陨落</div>
                </div>
              </div>
            </div>
          </a>
    <div class="movie-detail movie-detail-strong movie-sale">
      <a href="/cinemas?movieId=1048263" class="active" target="_blank" data-act="salePlayingMovie-click" data-val="{movieid:1048263}">购 票</a>
    </div>
          <div class="movie-ver"><i class="imax2d"></i></div>
        </div>
      
      </dd><dd>
        <div class="movie-item">
          <a href="/films/1359726" target="_blank" data-act="playingMovie-click" data-val="{movieid:1359726}">
            <div class="movie-poster">
              <img class="movie-poster-img" alt="边缘行者电影海报" src="https://p0.pipi.cn/mmdb/25bfd6022c98070e13f2aa3268512a1467db6.jpg?imageView2/1/w/160/h/220">
              <div class="movie-overlay movie-overlay-bg">
                <div class="movie-info">
                  <div class="movie-score"><i class="integer">8.</i><i class="fraction">1</i></div>
                  <div class="movie-title movie-title-padding" title="边缘行者">边缘行者</div>
                </div>
              </div>
            </div>
          </a>
    <div class="movie-detail movie-detail-strong movie-sale">
      <a href="/cinemas?movieId=1359726" class="active" target="_blank" data-act="salePlayingMovie-click" data-val="{movieid:1359726}">购 票</a>
    </div>
          <div class="movie-ver"></div>
        </div>
      
      </dd><dd>
        <div class="movie-item">
          <a href="/films/1263216" target="_blank" data-act="playingMovie-click" data-val="{movieid:1263216}">
            <div class="movie-poster">
              <img class="movie-poster-img" alt="精灵旅社4：变身大冒险电影海报" src="https://p0.pipi.cn/mmdb/25bfd69a8eac7e7a3539dd3abbabc299e2f10.jpg?imageView2/1/w/160/h/220">
              <div class="movie-overlay movie-overlay-bg">
                <div class="movie-info">
                  <div class="movie-score"><i class="integer">9.</i><i class="fraction">1</i></div>
                  <div class="movie-title movie-title-padding" title="精灵旅社4：变身大冒险">精灵旅社4：变身大冒险</div>
                </div>
              </div>
            </div>
          </a>
    <div class="movie-detail movie-detail-strong movie-sale">
      <a href="/cinemas?movieId=1263216" class="active" target="_blank" data-act="salePlayingMovie-click" data-val="{movieid:1263216}">购 票</a>
    </div>
          <div class="movie-ver"></div>
        </div>
      
    </dd></dl>
    
    
        </div>
      </div>`
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={
                {
                    __html: this.state.text
                }
            }>

            </div>
        )
    }
}
