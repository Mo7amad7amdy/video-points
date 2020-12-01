<?php

namespace App\Notifications;

use App\Quiz;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class AnsweredQuizController extends Notification
{
    use Queueable;
    protected $user;

    /**
     * Create a new notification instance.
     *
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * @param $notifiable
     * @return array
     */
    public function toDatabase($notifiable)
    {
        return [
            'user_id'   => $this->user->id,
            'user_name' => $this->user->name,
        ];
    }
}
