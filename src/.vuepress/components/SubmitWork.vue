<template xmlns="http://www.w3.org/1999/html">
  <form class="overlay">
    <div class="form-container">
      <label><strong>名称：</strong></label>
      <input type="text" ref="name" />
      <br />
      <label><strong>建议：</strong></label>
      <input type="text" ref="why" />
      <br />
      <label><strong>联系邮箱：</strong></label>
      <input type="email" ref="style" />
      <br />
      *尽量使用电脑端访问-某人懒得改
    </div>
    <div class="form-container-right">
      <button @click="submitForm" type="submit" class="code-button">
        提交
      </button>
    </div>
  </form>
</template>

<style>
.overlay {
  display: flex;
  width: 100%;
  padding: 12px 20px;
  border: 2px solid var(--theme-color);
  border-radius: 10px;
  box-sizing: border-box;
}

.form-container {
  height: 100%;
  width: 60%;
}

.form-container-right {
  height: 100%;
  width: 40%;
}

.form-container label {
  width: 80px;
}

.form-container input {
  background-color: #eee;
  border: none;
  padding: 12px;
  margin: 8px 0;
  width: 100%;
  outline: none;
}

.code-button {
  width: 70%;
  line-height: 220px;
  float: right;
  border-radius: 5px;
  border: 1px solid var(--theme-color);
  background-color: var(--theme-color);
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
}

.code-button:hover {
  transform: scale(0.95);
}
</style>

<script>
export default {
  props: {
    work_type: {
      type: String,
      required: true,
    },
    label_name: {
      type: String,
      required: true,
    },
  },
  data() {
    return { showForm: false };
  },
  methods: {
    submitForm() {
      // 提交后重置表单数据
      const name = this.$refs.name.value;
      const why = this.$refs.why.value;
      const style = this.$refs.style.value;
      const template = `mw_docs.yml`;
      const title = `MW & MWT 文档: ${name}`;

      const url = `https://github.com/MWDOCS/MW-MWT-DOCS/issues/new?&labels=${this.label_name
        }&projects=&template=${template}&title=${encodeURIComponent(
          title
        )}&name=${encodeURIComponent(name)}&why=${encodeURIComponent(
          why
        )}&style=${encodeURIComponent(style)}&status=${encodeURIComponent(
          style
        )}`;

      window.open(url);
    },
  },
};
</script>
