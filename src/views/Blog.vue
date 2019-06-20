<template>
  <div>
    <div class="container">
      <nav class="row align-items-center mt-5">
        <div class="col-12 col-md mb-2 mb-md-0">
          <div class="row justify-content-center">
            <a
              class="col-5 col-md btn btn-warning font-letter mx-2 mb-2"
              href="#"
              @click.prevent="getBlog('all')"
              :class="{'active':blog == 'all'}"
            >全部文章</a>
            <a
              class="col-5 col-md btn btn-warning font-letter mx-2 mb-2"
              href="#"
              @click.prevent="getBlog('skill')"
              :class="{'active':blog == 'skill'}"
            >養護小技巧</a>
            <a
              class="col-5 col-md btn btn-warning font-letter mx-2 mb-2"
              href="#"
              @click.prevent="getBlog('qa')"
              :class="{'active':blog == 'qa'}"
            >多肉Q&A</a>
            <a
              class="col-5 col-md btn btn-warning font-letter mx-2 mb-2"
              href="#"
              @click.prevent="getBlog('gift')"
              :class="{'active':blog == 'gift'}"
            >挑禮物</a>
          </div>
        </div>
        <div class="col-12 col-md d-flex justify-content-md-end">
          <div class="col-md-6 col-12 d-flex align-items-center text-warning email-block">
            <input class="form-control" type="text" placeholder="找文章嗎?">
            <i class="fas fa-search mr-2"></i>
          </div>
        </div>
      </nav>
      <hr class="mb-4">

      <div class="row flex-wrap mb-5" v-if="!article" >
        <div class="col-12 col-md-4 mb-3" v-if="blog === 'all'">
          <div class="card blog-card">
            <div
              class="card-img-top banner p-2"
              style="background-image:url('https://images.unsplash.com/photo-1534235844982-e021907f6d39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
            >
              <i class="fas fa-heart text-danger fa-2x"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">開張大吉</h5>
              <p class="card-text">「多肉行旅」網路商店正式營運拉～</p>
              <a href="#" class="btn btn-lake disabled">READ</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3" v-if="blog === 'all' || blog ==='skill'">
          <div class="card blog-card">
            <div
              class="card-img-top banner"
              style="background-image:url('https://images.unsplash.com/photo-1526403184940-93931285d324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')"
            ></div>
            <div class="card-body">
              <h5 class="card-title">多肉植物專用土：泥炭土</h5>
              <p class="card-text">喜歡多肉的你，一定遇到過泥炭土，不過常常都是扮演著要被換掉的角色，因為換土的重要性是這麼的高！</p>
              <a href="#" class="btn btn-lake" @click.prevent="getArticle">READ</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3" v-if="blog === 'all' || blog ==='gift'">
          <div class="card blog-card">
            <div
              class="card-img-top banner"
              style="background-image:url('https://images.unsplash.com/photo-1534198379268-c74c247f23ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
            ></div>
            <div class="card-body">
              <h5 class="card-title">多肉牆</h5>
              <p class="card-text">
                冬天是很多多肉植物的生長季節，
                位在台北的多肉植物牆的冬天近況真的超級美，
                最近的低溫奏效，牆上的多肉植物紛紛變紅、變紫，顏色的巨大變化，
                會讓你每天起床看著他們都有些驚喜</p>
              <a href="#" class="btn btn-lake disabled">READ</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3" v-if="blog === 'all' || blog ==='gift'">
          <div class="card blog-card">
            <div
              class="card-img-top banner"
              style="background-image:url('https://images.unsplash.com/photo-1517024785852-498ab0c02de5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80')"
            ></div>
            <div class="card-body">
              <h5 class="card-title">多肉盆器怎麼買？</h5>
              <p class="card-text">多肉盆器是需要經過設計的，
                不論大小、材質，甚至是有無排水設計、遮陰設計等等，
                一個好的多肉盆器肯定是專門為他設計的</p>
              <a href="#" class="btn btn-lake disabled">READ</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3" v-if="blog === 'all' || blog ==='qa'">
          <div class="card blog-card">
            <div
              class="card-img-top banner"
              style="background-image:url('https://images.unsplash.com/photo-1474974369916-d0ebdc3dadca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
            ></div>
            <div class="card-body">
              <h5 class="card-title">混血多肉的身世之謎</h5>
              <p class="card-text">你是否常常有這樣的疑問：
                「怎麼多肉這麼多種？怎樣都蒐集不完！」
                或是「這些都長得好像，不都一樣嗎？」</p>
              <a href="#" class="btn btn-lake disabled">READ</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3" v-if="blog === 'all' || blog === 'qa'">
          <div class="card blog-card">
            <div
              class="card-img-top banner"
              style="background-image:url('https://images.unsplash.com/photo-1505048880086-269cc0fd2cf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
            ></div>
            <div class="card-body">
              <h5 class="card-title">仙人掌最喜歡的休閒活動是..?</h5>
              <p
                class="card-text"
              >喜歡多肉植物的你我都知道，
              仙人掌也是一種多肉植物，
              關於多肉植物的機智問答我們搜集了一些，
              今天想跟大家分享的就是「仙人掌最喜歡的休閒活動」，
              大家知道仙人掌最喜歡什麼活動嗎？</p>
              <a href="#" class="btn btn-lake disabled">READ</a>
            </div>
          </div>
        </div>
      </div>

      <!--文章-->
      <div v-if="article">
        <h1 class="text-hex mb-3">多肉植物專用土：泥炭土</h1>
        <div class="row">
          <div class="col-sm-8">
            <small>
              <span class="mr-3 text-secondary">
                <i class="fas fa-users mr-2"></i>本文章轉載至
                <a
                  href="https://succuland.com.tw/brands-project/goodforsucculents-peatmoss/"
                >有肉</a>
              </span>
              <span class="mr-3 text-secondary">2019/05/05</span>
              <span class="mr-3">
                <a href="#" class="text-lake">
                  <i class="fas fa-tag mr-2"></i>養護小技巧
                </a>
              </span>
            </small>
            <article class="my-4">
              <div
                class="banner mb-3"
                style="background-image:url('https://images.unsplash.com/photo-1526403184940-93931285d324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');height:300px;"
              ></div>
              <p
                class="text-secondary blogtxt"
              >你是否常常有這樣的疑問：「怎麼多肉這麼多種？怎樣都蒐集不完！」
              或是「這些都長得好像，不都一樣嗎？」
              當你心中時常想起這兩個問題，
              就表示你已經晉升到多肉迷 Level 2 ，
              想要更加了解多肉的種類與品名，
              而這些問題的原因在這篇文章將會得到解答，
              這篇文章一起來探討「混血多肉」的祕密吧！</p>
              <h3 class="my-3">保水性與有機質：泥炭土</h3>
              <ul class="text-secondary blogtxt mb-4">
                <li>泥炭土（ Peatmoss ），常常搞混於培養土，
                  兩者差別在泥炭土主要原料都是苔蘚為主，
                  培養土則是針對不同植物而特別推出的混合介質的總稱，不局限於泥炭土。</li>
                <li>產於德國與立陶宛，混合白泥炭與黑泥炭土而成，
                  呈深褐色、細緻質地的介質。</li>
                <li>有機植豐富，內涵豐富微生物菌，
                  可提供豐富的營養給植物，我們使用的泥炭土含有一定的氮成分。</li>
                <li>使其兼具保水性與通氣性。</li>
                <li>酸鹼值微酸 （5.5 – 6.5），含有腐殖酸，
                  可促進土壤團粒性質與增加肥效。</li>
              </ul>
              <h3 class="my-3">使用方法 – 混合介質</h3>
              <p class="text-secondary blogtxt mb-4">
                在將多肉換盆時，使用的混合土內可以將泥炭土混合入內，
                但是如果你的盆器底下是沒有孔洞的，就可以考慮不加入泥炭土沒關係。
                極佳的有機質與保肥性，讓你的多肉植物可以生長的更均衡健康。</p>
              <p class="text-secondary blogtxt mb-4">.......</p>
              <div class="card">
                <div class="card-header">留言回覆</div>
                <div class="card-body">
                  <div class="media">
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      class="align-self-start mr-3 img-fluid"
                      style="width:64px; hight:64px;"
                    >
                    <div class="media-body">
                      <h5 class="mt-0">我愛多肉</h5>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="想說些什麼嗎?"
                          v-model="newMessage"
                          @keyup.enter="sendtxt"
                        ></textarea>
                        <a
                          href="#"
                          class="btn btn-light btn-block mt-3"
                          @click.prevent="sendtxt"
                        >送 出</a>
                      </div>
                    </div>
                  </div>
                  <div class="media" v-for="item in message" :key="item.id">
                    <img
                      src="https://randomuser.me/api/portraits/lego/1.jpg"
                      class="align-self-start mr-3 img-fluid"
                      style="width:64px; hight:64px;"
                    >
                    <div class="media-body">
                      <h5 class="mt-0">我愛多肉</h5>
                      <div class="form-group">
                        <p class="mb-0">{{ item.txt }}</p>
                        <div class="mb-5">
                          <small class="text-secondary">{{item.time | date}}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-sm-4 mb-5">
            <p class="h2 text-secondary">Tags</p>
            <a href="#" class="badge badge-lake mr-2 mb-2">
              <i class="fas fa-tag mr-2"></i>養護小技巧
            </a>
            <a href="#" class="badge badge-lake mr-2 mb-2">
              <i class="fas fa-tag mr-2"></i>Q&A
            </a>
            <a href="#" class="badge badge-lake mr-2 mb-2">
              <i class="fas fa-tag mr-2"></i>挑禮物
            </a>
            <a href="#" class="badge badge-lake mr-2 mb-2">
              <i class="fas fa-tag mr-2"></i>多肉植物
            </a>
            <a href="#" class="badge badge-lake mr-2 mb-2">
              <i class="fas fa-tag mr-2"></i>多肉行旅
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.email-block {
  .form-control {
    position: relative;
    border: none;
    outline: none;
    background: none;
    border-bottom: 3px solid #f3de8a;
    border-radius: 0;
  }

  i {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
}

.blog-card {
  border: 1px solid #75B9BE;

  .card-img-top {
    height: 200px;
  }
}

.blogtxt {
  letter-spacing: 2px;
}
</style>

<script>
export default {
  data() {
    return {
      blog: 'all', // 文章類別控制
      article: false, // 文章顯示控制
      newMessage: '',
      message: [
        {
          txt: '謝謝大大無私分享',
          time: '1557064598',
        },
      ],
    };
  },
  methods: {
    getBlog(num) {
      const vm = this;
      this.blog = num;
      vm.article = false;
    },
    getArticle() {
      const vm = this;
      vm.article = true;
    },
    sendtxt() {
      const value = this.newMessage.trim();
      const timestamp = Math.floor(Date.now() / 1000);
      if (value === '') {
        return;
      }
      this.message.push({
        txt: value,
        time: timestamp,
      });
      this.newMessage = '';
    },
  },
};
</script>
