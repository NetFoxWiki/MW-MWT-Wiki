<template xmlns="http://www.w3.org/1999/html">
  <div style="text-align: center">
    <button @click="openForm" class="code-button">添加</button>
  </div>

  <form v-if="showForm" class="overlay" @click.self="closeForm">
    <div class="form-container">
      <label>名称：</label>
      <input type="text" ref="name" />
      <br />
      <label>原因：</label>
      <input type="text" ref="why" />
      <br />
      <label>联系方式：</label>
      <input type="text" ref="style" />
      <br />
      
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
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  
}

.form-container {
	height: 100%;
}

.form-container label {
  width: 80px;
}

.form-container input {
  background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
	outline: none;
}

.code-button {
  border-radius: 5px;
	border: 1px solid #2196f3;
	background-color: #2196f3;
	color: #FFFFFF;
	font-size: 12px;
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
    openForm() {
      this.showForm = true;
    },
    closeForm() {
      this.showForm = false;
    },
    submitForm() {
      // 提交后重置表单数据
      const name = this.$refs.name.value;
      const why = this.$refs.why.value;
      const style = this.$refs.style.value;
      const template = `mw_pz.yml`;
      const title = `MWPZ: ${name}`;

      const url = `https://github.com/MWDOCS/Wakudocs.github.io/issues/new?&labels=${
        this.label_name
      }&projects=&template=${template}&title=${encodeURIComponent(
        title
      )}&name=${encodeURIComponent(name)}&why=${encodeURIComponent(
        why
      )}&style=${encodeURIComponent(style)}&status=${encodeURIComponent(
        style
      )}`;

      window.open(url);

      // 关闭表单
      this.closeForm();
    },
  },
};
</script>
