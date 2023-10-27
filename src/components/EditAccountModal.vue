<template>
    <div class="modal fade" id="editAccountModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Account</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="editAccount()">
                        <div class="mb-3">
                            <label for="accountName" class="form-label">Account Name</label>
                            <input type="text" class="form-control" id="accountName">
                        </div>
                        <div class="mb-3">
                            <label for="accountBio" class="form-label">Account Bio</label>
                            <input type="text" class="form-control" id="accountBio">
                        </div>
                        <div class="mb-3">
                            <label for="avatarImg" class="form-label">Avatar Image</label>
                            <input type="url" class="form-control" id="avatarImg">
                        </div>
                        <div class="mb-3">
                            <label for="coverImg" class="form-label">Cover Image</label>
                            <input type="url" class="form-control" id="coverImg">
                        </div>
                        <div class="mb-3">
                            <label for="accountGithub" class="form-label">GitHub Link</label>
                            <input type="url" class="form-control" id="accountGithub">
                        </div>
                        <div class="mb-3">
                            <label for="accountLinkedIn" class="form-label">Link to LinkedIn</label>
                            <input type="url" class="form-control" id="accountLinkedIn">
                        </div>
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                    </form>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed, ref } from 'vue';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';
import { accountService } from '../services/AccountService';


export default {
    setup() {
        const editable = ref({})
        return {
            editable,
            account: computed(() => AppState.account),
            async editAccount() {
                try {
                    const accountData = editable.value;
                    await accountService.editAccount(accountData)
                } catch (error) {
                    Pop.error()
                }
            }

        }
    }
};
</script>


<style lang="scss" scoped></style>