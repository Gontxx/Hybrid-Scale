<template>
  <el-col>
    <el-tabs
        v-model="editableTabsValue"
        type="card"
        editable
        class="demo-tabs"
        @edit="handleTabsEdit"
    >
      <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </el-col>

</template>

<script>

export default {
name: "Terminal",
  data() {
  return {
    tabIndex: 0,
    editableTabsValue: '0',
    editableTabs: [
      {
        title: 'Terminal 0',
        name: '0',
        content: ' $' + this.accountName + '@' + this.provider +  ':',
      }
    ]
  }
  },
  methods: {
    handleTabsEdit(targetName, action){
      console.log(targetName)
      if (action === 'add') {
        const newTabName = `${++this.tabIndex}`
        this.editableTabs.push({
          title: 'New Terminal',
          name: newTabName,
          content: '$xxtong@WM01:',
        })
        this.editableTabsValue = newTabName
      } else if (action === 'remove') {
        const tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
      }
    }
  },
  props: {
    accountName: {
      type: String,
      required: true
    },
    provider: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>
.el-tab-pane {
  font-size: 10px;
  text-align: left;
  background-color: darkgray;
  height: 300px;
}
</style>